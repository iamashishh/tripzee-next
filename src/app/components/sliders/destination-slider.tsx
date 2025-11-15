"use client";

import React, { useCallback, useEffect, useState, useMemo } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import DestinationCard, { demoDestinations } from "../cards/destination-card";
import ProgressBar from "../ui/ProgressBar";

const OPTIONS = {
  loop: false,
  align: "start" as const,
  dragFree: true,
  slidesToScroll: 1,
};

type FilterType = "all" | "domestic" | "international";

interface DestinationSliderProps {
  showFilter?: boolean;
}

export default function DestinationSlider({
  showFilter = false,
}: DestinationSliderProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [, setPrevBtnEnabled] = useState(false);
  const [, setNextBtnEnabled] = useState(false);
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [
    WheelGesturesPlugin({ forceWheelAxis: "x" }),
  ]);

  // Filter destinations based on active filter
  const filteredDestinations = useMemo(() => {
    if (activeFilter === "all") {
      return demoDestinations;
    }
    return demoDestinations.filter(
      (destination) => destination.attributes.category === activeFilter
    );
  }, [activeFilter]);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;

    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress);

    // Update button states
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onScroll();
    emblaApi.on("scroll", onScroll);
    emblaApi.on("reInit", onScroll);

    return () => {
      emblaApi.off("scroll", onScroll);
      emblaApi.off("reInit", onScroll);
    };
  }, [emblaApi, onScroll]);

  // Reset carousel when filter changes
  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
      emblaApi.scrollTo(0);
    }
  }, [emblaApi, activeFilter]);

  const handleFilterChange = (filter: FilterType) => {
    setActiveFilter(filter);
  };

  const tabs = [
    {
      id: "all" as FilterType,
      label: "All Destinations",
      icon: "🌍",
    },
    {
      id: "domestic" as FilterType,
      label: "Domestic",
      icon: "🏠",
    },
    {
      id: "international" as FilterType,
      label: "International",
      icon: "✈️",
    },
  ];

  const cn = (...classes: string[]) => classes.filter(Boolean).join(" ");

  return (
    <div className="relative h-full w-full">
      {/* Filter Tabs */}
      {showFilter && (
        <div className="flex items-center gap-2 md:gap-6 md:mt-2 mb-6 overflow-x-auto hide-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleFilterChange(tab.id)}
              className={cn(
                "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] md:text-[15px] font-semibold transition-all border whitespace-nowrap",
                activeFilter === tab.id
                  ? "bg-black text-white border-black"
                  : "bg-white text-black border-gray-200 hover:bg-gray-100"
              )}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      )}

      <div className="" ref={emblaRef}>
        <div className="flex -ml-3 sm:-ml-4 lg:-ml-6">
          {filteredDestinations.map((destination) => (
            <div
              key={destination.id}
              className="flex-[0_0_100%] pl-4 sm:pl-4 lg:pl-4 min-[350px]:flex-[0_0_66.666%] min-[650px]:flex-[0_0_40%] min-[850px]:flex-[0_0_33.333%] min-[1400px]:flex-[0_0_24%]"
            >
              <DestinationCard
                title={destination.attributes.title}
                packages={destination.attributes.packages}
                image={destination.attributes.image}
                category={destination.attributes.category}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 px-4 max-w-[300px] mx-auto">
        <ProgressBar
          progress={scrollProgress}
          activeIndex={0}
          total={filteredDestinations.length}
        />
      </div>
    </div>
  );
}
