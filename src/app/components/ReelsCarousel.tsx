"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import Image from "next/image";
import { HiVolumeOff, HiVolumeUp } from "react-icons/hi";
import ProgressBar from "./ui/ProgressBar";
export default function ReelsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: false,
      align: "start",
      dragFree: false,
      skipSnaps: false,
    },
    [WheelGesturesPlugin()]
  );

  const videosRef = useRef<Array<HTMLVideoElement | null>>([]);
  const [, setCurrentSlide] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const reels = [
    {
      id: 1,
      video: "/reels/reelstrp.MP4",
      poster: "/assets/reel-poster-1.jpg",
    },
    {
      id: 2,
      video: "/reels/reeltr.MP4",
      poster: "/assets/reel-poster-2.jpg",
    },
    {
      id: 3,
      video: "/reels/reelstrp.MP4",
      poster: "/assets/reel-poster-3.jpg",
    },
    {
      id: 4,
      video: "/reels/reelstrp.MP4",
      poster: "/assets/reel-poster-4.jpg",
    },
    {
      id: 5,
      video: "/reels/reelstrp.MP4",
      poster: "/assets/reel-poster-5.jpg",
    },
    {
      id: 6,
      video: "/reels/reelstrp.MP4",
      poster: "/assets/reel-poster-6.jpg",
    },
    {
      id: 7,
      video: "/reels/reelstrp.MP4",
      poster: "/assets/reel-poster-7.jpg",
    },
  ];

  const [isMuted, setIsMuted] = useState(true);

  const pauseAll = useCallback(() => {
    videosRef.current.forEach((v) => {
      if (v) {
        v.pause();
      }
    });
  }, []);

  const playIndex = useCallback(
    async (index: number) => {
      pauseAll();
      const vid = videosRef.current[index];
      if (!vid) return;
      try {
        await vid.play();
      } catch (error) {
        console.error("Failed to play video:", error);
      }
    },
    [pauseAll]
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      const selectedIndex = emblaApi.selectedScrollSnap();
      setCurrentSlide(selectedIndex);
      setScrollProgress((selectedIndex + 1) / reels.length);
    };

    const onInit = () => {
      setCurrentSlide(0);
      setScrollProgress(1 / reels.length);
      playIndex(0);
    };

    emblaApi.on("select", onSelect);
    emblaApi.on("init", onInit);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("init", onInit);
    };
  }, [emblaApi, playIndex, reels.length]);

  const togglePlayPause = useCallback(
    (index: number) => {
      const vid = videosRef.current[index];
      if (!vid) return;

      if (vid.paused) {
        playIndex(index);
      } else {
        vid.pause();
      }
    },
    [playIndex]
  );

  const handleEnded = useCallback(() => {
    if (!emblaApi || !emblaApi.canScrollNext()) return;
    emblaApi.scrollNext();
    const nextIndex = emblaApi.selectedScrollSnap() + 1;
    if (nextIndex < reels.length) {
      playIndex(nextIndex);
    }
  }, [emblaApi, playIndex, reels.length]);

  // ✅ Toggle ALL videos
  const toggleMute = () => {
    setIsMuted((prev) => {
      const next = !prev;
      videosRef.current.forEach((v) => v && (v.muted = next));
      return next;
    });
  };

  // ✅ Sync global mute to all elements on change
  useEffect(() => {
    videosRef.current.forEach((v) => v && (v.muted = isMuted));
  }, [isMuted]);

  const handleVideoClick = useCallback(
    (index: number) => {
      if (!emblaApi) {
        togglePlayPause(index);
        return;
      }
      const selected = emblaApi.selectedScrollSnap();
      if (selected !== index) {
        emblaApi.scrollTo(index);
      } else {
        togglePlayPause(index);
      }
    },
    [emblaApi, togglePlayPause]
  );

  useEffect(() => () => pauseAll(), [pauseAll]);

  return (
    <main className=" bg-white overflow-hidden">
      <section className="w-full sm:block max-container  hidden  py-2  relative">
        <h2 className="text-heading mb-6 px-4">
          Live the Adventure
        </h2>

        <div className="overflow-hidden px-4" ref={emblaRef}>
          <div className="flex gap-4">
            {reels.map((item, i) => (
              <div
                key={item.id}
                className="
                relative rounded-2xl overflow-hidden bg-black
                flex-[0_0_80%]
                md:flex-[0_0_45%]
                xl:flex-[0_0_24.3%]
                md:h-[500px]
                h-[380px]
                select-none
              "
              >
                <Image
                  src="/assets/tripzelogo.png"
                  alt="logo"
                  width={80}
                  height={40}
                  className="absolute top-3 right-3 z-10"
                />

                {item.poster && (
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={item.poster}
                      alt="poster"
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                <video
                  ref={(el) => {
                    videosRef.current[i] = el;
                  }}
                  src={item.video}
                  loop
                  muted={isMuted}
                  onClick={() => handleVideoClick(i)}
                  onEnded={handleEnded}
                  className="w-full h-full object-cover relative z-5"
                  playsInline
                  preload="metadata"
                />

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleMute();
                  }}
                  className="
                  absolute bottom-4 right-4 z-20
                  bg-black/60 text-white p-2 rounded-full text-md
                "
                >
                  {isMuted ? (
                    <HiVolumeOff size={18} />
                  ) : (
                    <HiVolumeUp size={18} />
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 px-4 max-w-[300px] mx-auto">
          <ProgressBar
            progress={scrollProgress}
            activeIndex={0}
            total={reels.length}
          />
        </div>
      </section>
    </main>
  );
}
