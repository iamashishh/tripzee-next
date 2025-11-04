"use client";
import React from "react";
import Image from "next/image";

interface Destination {
  name: string;
  image: string;
}

interface TopDestinationsProps {
  /** Section heading text */
  sectionTitle: string;
  /** Array of destinations with name and image */
  destinations: Destination[];
}

const TopDestinations: React.FC<TopDestinationsProps> = ({
  sectionTitle,
  destinations,
}) => {
  return (
    <section className="w-full bg-white py-12 ">
      <div className="max-container mx-auto px-5 sm:px-10 lg:px-16 text-center">
        {/* Section Title */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-black mb-12">
          {sectionTitle}
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-10 gap-x-6 place-items-center">
          {destinations.map((dest, index) => (
            <div key={index} className="flex flex-col items-center">
           <div className="relative w-28 h-32 sm:w-32 sm:h-40 lg:w-40 lg:h-48 rounded-[80%/60%] overflow-hidden hover:scale-105 transition-all duration-300">
  <Image
    src={dest.image}
    alt={dest.name}
    fill
    className="object-cover rounded-[80%/80%]"
    sizes="(max-width: 768px) 100vw, 20vw"
  />
</div>

              <p className="text-sm sm:text-base font-medium text-black mt-3">
                {dest.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopDestinations;
