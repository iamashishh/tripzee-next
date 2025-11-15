"use client";
import DestinationSlider from "../../sliders/destination-slider";

export default function DestinationCategories() {

  return (
    <main className="bg-white  overflow-hidden">
      <section className="w-full  max-container mx-auto py-10">
        {/* Title */}
        <h2 className="text-heading mb-3 md:mb-6 text-black">
          Explore Destinations
        </h2>
        <DestinationSlider showFilter={true} />
      </section>
    </main>
  );
}
