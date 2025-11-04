"use client";
import Image from "next/image";
import { IoArrowForward } from "react-icons/io5";

export default function MomentsGallery() {
  return (
   <section className="w-full max-container py-6 sm:py-12">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full">

    {/* LEFT BIG IMAGE */}
    <div className="col-span-1 md:col-span-2 rounded-2xl overflow-hidden">
      <Image
        src="/assets/hero.jpg"
        alt="Big"
        width={1200}
        height={800}
        className="
          w-full 
          h-[220px] 
          sm:h-[300px]
          md:h-full
          object-cover
        "
      />
    </div>

    {/* RIGHT COLUMN */}
    <div className="flex flex-col gap-4 md:gap-6">

      {/* TOP SMALL IMAGE */}
      <div className="rounded-2xl overflow-hidden">
        <Image
          src="/assets/hero.jpg"
          alt="Small Top"
          width={600}
          height={400}
          className="
            w-full 
            h-[160px]
            sm:h-[200px]
            md:h-full
            object-cover
          "
        />
      </div>

      {/* BOTTOM SMALL IMAGE + BUTTON */}
      <div className="relative rounded-2xl overflow-hidden">
        <Image
          src="/assets/hero.jpg"
          alt="Small Bottom"
          width={600}
          height={400}
          className="
            w-full 
            h-[160px]
            sm:h-[200px]
            md:h-full
            object-cover
          "
        />

        {/* BUTTON OVERLAY */}
        <button className="
          absolute bottom-3 right-3
          bg-white text-black px-5 py-2 rounded-full
          font-normal flex items-center gap-2 shadow-md text-sm
          sm:bottom-4 sm:right-4 sm:px-6 sm:py-2 sm:text-base
        ">
          See more <IoArrowForward />
        </button>
      </div>

    </div>
  </div>
</section>

  );
}
