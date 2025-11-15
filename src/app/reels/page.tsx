"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import React from "react";

export default function ReelsPage() {
  const videos = [
    "/reels/reelstrp.MP4",
    "/reels/reeltr.MP4",
        "/reels/reelstrp.MP4",
        "/reels/reeltr.MP4",
    
  ];

  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [playingStates, setPlayingStates] = useState<boolean[]>(
    new Array(videos.length).fill(false)
  );
  const [isMuted, setIsMuted] = useState(true); // Start muted for autoplay compatibility

  const handleScroll = useCallback(() => {
    if (!containerRef.current) return;

    const scrollTop = containerRef.current.scrollTop;
    const containerHeight = window.innerHeight;

    // Calculate which video should be active based on scroll position
    const newActiveIndex = Math.round(scrollTop / containerHeight);

    // Ensure the index is within bounds
    const clampedIndex = Math.max(
      0,
      Math.min(newActiveIndex, videos.length - 1)
    );

    // Only update if the active index actually changed
    if (clampedIndex !== activeIndex) {
      setActiveIndex(clampedIndex);
    }
  }, [activeIndex, videos.length]);

  const handleVideoClick = async (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;

    // Only handle click for the currently active video
    if (index === activeIndex) {
      try {
        if (video.paused) {
          await video.play();
          setPlayingStates((prev) => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
          console.log(`Manual play video ${index}`);
        } else {
          video.pause();
          setPlayingStates((prev) => {
            const newState = [...prev];
            newState[index] = false;
            return newState;
          });
          console.log(`Manual pause video ${index}`);
        }
      } catch (error) {
        console.error(`Error in manual video control ${index}:`, error);
      }
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    // Update all video elements
    videoRefs.current.forEach((video) => {
      if (video) {
        video.muted = !isMuted;
      }
    });
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Auto play/pause videos based on active index
  useEffect(() => {
    const playVideo = async (video: HTMLVideoElement, index: number) => {
      try {
        await video.play();
        setPlayingStates((prev) => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
        console.log(`Video ${index} playing`);
      } catch (error) {
        console.error(`Error playing video ${index}:`, error);
      }
    };

    const pauseVideo = (video: HTMLVideoElement, index: number) => {
      video.pause();
      video.currentTime = 0; // Reset to beginning
      setPlayingStates((prev) => {
        const newState = [...prev];
        newState[index] = false;
        return newState;
      });
      console.log(`Video ${index} paused`);
    };

    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === activeIndex) {
        // Play the active video
        playVideo(video, index);
      } else {
        // Pause all other videos
        pauseVideo(video, index);
      }
    });
  }, [activeIndex]);

  // Initialize first video to play on mount
  useEffect(() => {
    const timer = setTimeout(async () => {
      const firstVideo = videoRefs.current[0];
      if (firstVideo) {
        try {
          await firstVideo.play();
          setPlayingStates((prev) => {
            const newState = [...prev];
            newState[0] = true;
            return newState;
          });
          console.log("First video initialized and playing");
        } catch (error) {
          console.error("Error initializing first video:", error);
        }
      }
    }, 500); // Increased delay to ensure video is fully loaded

    return () => clearTimeout(timer);
  }, []);

  // Sync muted state with all videos
  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (video) {
        video.muted = isMuted;
      }
    });
  }, [isMuted]);

  return (
    <>
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fade-out {
          0% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(0.9);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .animate-fade-out {
          animation: fade-out 1.5s ease-out forwards;
        }
      `}</style>
      <div
        ref={containerRef}
        className="w-full h-screen snap-y snap-mandatory overflow-scroll scrollbar-none bg-black"
      >
        {videos.map((src, index) => (
          <div
            key={index}
            className="w-full h-screen snap-start relative flex items-center justify-center"
          >
            <video
              ref={(el) => {
                videoRefs.current[index] = el;
              }}
              src={src}
              className="h-full w-full object-cover cursor-pointer"
              muted={isMuted}
              loop
              playsInline
              onClick={() => handleVideoClick(index)}
            />

            {/* Play/Pause Indicator - only show for active video when paused */}
            {!playingStates[index] && index === activeIndex && (
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none gap-4 animate-fade-in">
                {/* Play Button */}
                <div
                  className="bg-black/60 rounded-full p-3 pointer-events-auto cursor-pointer hover:bg-black/80 transform hover:scale-110 transition-all duration-300 ease-out backdrop-blur-sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleVideoClick(index);
                  }}
                >
                  <svg
                    className="w-14 h-14 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            )}

            {/* Pause Indicator - shows briefly when video is paused */}
            {playingStates[index] && index === activeIndex && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-black/60 rounded-full p-4 backdrop-blur-sm animate-fade-out">
                  <svg
                    className="w-12 h-12 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                  </svg>
                </div>
              </div>
            )}

            {/* Always visible mute button in top-right corner */}
            <button
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering video click
                toggleMute();
              }}
              className="absolute top-4 right-4 bg-black/50 rounded-full p-2 text-white hover:bg-black/70 transition-all"
            >
              {isMuted ? (
                // Muted icon
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                  />
                </svg>
              ) : (
                // Unmuted icon
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                  />
                </svg>
              )}
            </button>

            <div className="absolute bottom-8 left-4 text-white space-y-1">
              <p className="text-sm w-60">Tripzee Holidays Happy Moments</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
