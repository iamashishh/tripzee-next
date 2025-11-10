import React from 'react'
import Hero from '../components/global/Hero'
import Image from 'next/image'
import WhyChooseUs from '../components/WhyChooseUs'

export default function page() {
  return (
    <main className="min-h-screen  bg-white flex flex-col">
     <div className="max-container ">
        <Hero
          title="AboutUs"
          subtitle="Create Unforgettable Memories in the Heart of the Himalayas."
          backgroundImage="/assets/honeymoon.png"
          showButton={false}
        />
      </div>
        <div className="max-container sm:py-12 py-6 bg-white">
        <div className=" flex-col-reverse bg-[#FFFBDF] rounded-xl p-6 flex  md:flex-row justify-between md:items-center sm:gap-8 gap-4 relative">
          {/* TEXT */}
          <div className="max-w-[700px] flex flex-col gap-3">
            <h3 className="text-[22px] text-black md:text-[28px] font-semibold">
              Ready to Plan Your Next Corporate Getaway?
            </h3>
            <p className="text-[15px] text-gray-800 leading-[1.45]">
              Celebrate your new chapter with dreamy destinations, intimate
              stays, and unforgettable moments — perfectly tailored for two.
            </p>

            <button className="bg-secondary py-2.5 sm:w-68  w-56 mt-2 rounded-full font-bold text-gray-800 hover:bg-yellow-500 transition-all">
              Enquiry Now
            </button>
          </div>

          {/* IMAGES CLUSTER */}
          <div className="flex  ">
            <div className="md:w-28 md:h-28 h-20 w-20 rounded-full overflow-hidden relative shadow-lg">
              <Image
                src="/assets/hero.jpg"
                fill
                alt="Trip"
                className="object-cover"
                sizes="(max-width: 112px) 100vw, 112px"
              />
            </div>
            <div className="md:w-28 md:h-28 h-20 w-20 rounded-full overflow-hidden relative   -ml-5 shadow-lg">
              <Image
                src="/assets/hero.jpg"
                fill
                alt="Trip"
                className="object-cover"
                sizes="(max-width: 112px) 100vw, 112px"
              />
            </div>
            <div className="md:w-28 md:h-28 h-20 w-20 rounded-full overflow-hidden relative  -ml-5 shadow-lg">
              <Image
                src="/assets/hero.jpg"
                fill
                alt="Trip"
                className="object-cover"
                sizes="(max-width: 112px) 100vw, 112px"
              />
            </div>
          </div>
        </div>
      </div>
 <div className="w-full max-container bg-white lg:px-6  py-8">
          <h2 className="font-bold  text-black text-8xl sm:text-9xl leading-none float-left mr-8">
            WE
          </h2>

          <h3 className="text-sm sm:text-base mt-2.5 md:text-lg text-black leading-relaxed">
            <span className="text-black font-medium m-2 ">
              Welcome to Tripzee Holidays
            </span>
            At Tripzee Holidays, we believe that every journey is more than just
            a destination- it ’ s a story waiting to unfold. We are dedicated to
            crafting memorable travel experiences that capture the heart, ignite
            the spirit of adventure, and leave an enduring mark on your life.
          </h3>
        </div>
          <div className="relative w-full flex flex-col items-center py-8">
            <h2 className="lg:text-5xl text-black text-3xl md:text-4xl font-extrabold my-16  text-center">
              Welcome to Tripzee Holidays
            </h2>

            {/* Container for circles */}
            <div className="relative flex flex-col md:flex-row items-start md:justify-center w-full md:w-auto overflow-x-auto md:overflow-x-visible scrollbar-hide px-4 md:px-0 space-x-4 md:space-x-[-60px]">
              {/* Circle 1 */}
              <div className="shrink-0 relative flex flex-col items-center">
                <div className=" ml-6 lg:w-80 size-44 md:w-64 md:h-64 lg:h-80  bg-yellow-400 rounded-full opacity-70 flex items-center justify-center z-10">
                  <h3 className="text-center font-bold text-xl text-black px-4">
                    OUR BRAND
                  </h3>
                </div>
                <p className="mt-2 mb-12 ml-4 md:mt-6 text-center text-gray-700 md:text-base max-w-xs md:max-w-60 leading-relaxed px-2">
                  Tripzee Holidays stands for fun, freedom, and flawless travel.
                  We believe every trip should be as unique as the traveler —
                  filled with authentic moments, not just checklists. Our brand
                  is built on trust, transparency, and a deep love for exploring
                  the world. When you travel with us, you don ’ t just visit a
                  destination you live it.
                </p>
              </div>

              {/* Circle 2 */}
              <div className="shrink-0 relative flex flex-col items-center z-20">
                <div className="size-44 lg:w-80  md:w-64 md:h-64 lg:h-80 bg-yellow-400 rounded-full opacity-70 flex items-center justify-center">
                  <h3 className="text-center font-bold text-xl text-black px-4">
                    OUR MISSION
                  </h3>
                </div>
                <p className="mt-2 mb-12 md:mt-6 text-center text-gray-700  md:text-base max-w-xs md:max-w-60 leading-relaxed px-2">
                  To make travel stress-free, affordable, and full of memories.
                  We aim to plan every detail perfectly so you can simply pack
                  your bags, show up, and enjoy. Whether it ’ s your first trip
                  or your fiftieth, our goal stays the same: To make you fall in
                  love with travel.
                </p>
              </div>

              {/* Circle 3 */}
              <div className="shrink-0 relative flex flex-col items-center z-30">
                <div className="lg:w-80 size-44 md:w-64 md:h-64 lg:h-80 bg-yellow-400 rounded-full opacity-70 flex items-center justify-center">
                  <h3 className="text-center font-bold text-xl text-black px-4">
                    OUR VISION
                  </h3>
                </div>
                <p className="mt-2 mb-12   md:mt-6 text-center text-gray-700  md:text-base max-w-xs md:max-w-60 leading-relaxed px-2">
                  To be the most loved travel brand that connects people with
                  places, cultures, and experiences across the globe. We dream
                  of a world where everyone gets to explore without worries
                  because when you travel, you grow, you laugh, and you live
                  more fully.
                </p>
              </div>
            </div>
          </div>
      <WhyChooseUs/>

    </main>
  )
}
