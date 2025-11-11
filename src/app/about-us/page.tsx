import React from "react";
import Hero from "../components/global/Hero";
import Image from "next/image";
import WhyChooseUs from "../components/WhyChooseUs";
const teamMembers = [
  { name: "Sophie Moore", role: "Head HR", img: "/assets/hero.jpg" },
  { name: "Sophie Moore", role: "Head HR", img: "/assets/hero.jpg" },
  { name: "Sophie Moore", role: "Head HR", img: "/assets/hero.jpg" },
  { name: "Sophie Moore", role: "Head HR", img: "/assets/hero.jpg" },
  { name: "Sophie Moore", role: "Head HR", img: "/assets/hero.jpg" },
  { name: "Sophie Moore", role: "Head HR", img: "/assets/hero.jpg" },
  { name: "Sophie Moore", role: "Head HR", img: "/assets/hero.jpg" },
  { name: "Sophie Moore", role: "Head HR", img: "/assets/hero.jpg" },
  { name: "Sophie Moore", role: "Head HR", img: "/assets/hero.jpg" },
  { name: "Sophie Moore", role: "Head HR", img: "/assets/hero.jpg" },
  { name: "Sophie Moore", role: "Head HR", img: "/assets/hero.jpg" },
  { name: "Sophie Moore", role: "Head HR", img: "/assets/hero.jpg" },
];
export default function page() {
  return (
    <main className="min-h-screen  bg-white flex flex-col">
      <div className="max-container ">
        <Hero
          title="
Wander Beyond Ordinary"
          subtitle="Craft your dream getaway with handpicked stays, thrilling adventures, and destinations that hit different only with Tripzee Holidays."
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
      <div className="w-full bg-gray-200 py-20">
        <div className="max-container mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-18">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center bg-white shadow-sm rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-28 h-28  rounded-full overflow-hidden mb-4 bg-black flex items-center justify-center">
                  <Image
                    src={member.img}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-lg m-4 font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{member.role}</p>
              </div>
            ))}
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
          At Tripzee Holidays, we believe that every journey is more than just a
          destination- it ’ s a story waiting to unfold. We are dedicated to
          crafting memorable travel experiences that capture the heart, ignite
          the spirit of adventure, and leave an enduring mark on your life.
        </h3>
      </div>
      <div className="relative w-full flex flex-col items-center py-8">
        <h2 className="lg:text-5xl text-black text-2xl md:text-3xl font-extrabold my-16 text-center">
          Welcome to Tripzee Holidays
        </h2>

        {/* Container for circles */}
        <div className="relative flex flex-col md:flex-row items-center md:items-start justify-center w-full overflow-x-auto md:overflow-x-visible scrollbar-hide px-4 md:px-0 md:space-x-[-60px] gap-10 md:gap-0">
          {/* Circle 1 */}
          <div className="shrink-0 relative flex flex-col items-center text-center">
            <div className="w-44 h-44 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-yellow-400 rounded-full opacity-70 flex items-center justify-center z-10">
              <h3 className="font-bold text-xl text-black px-4">OUR BRAND</h3>
            </div>
            <p className="mt-4 mb-12 text-gray-700 text-sm md:text-base max-w-xs md:max-w-60 leading-relaxed px-2">
              Tripzee Holidays stands for fun, freedom, and flawless travel. We
              believe every trip should be as unique as the traveler — filled
              with authentic moments, not just checklists. Our brand is built on
              trust, transparency, and a deep love for exploring the world. When
              you travel with us, you don’t just visit a destination — you live
              it.
            </p>
          </div>

          {/* Circle 2 */}
          <div className="shrink-0 relative flex flex-col items-center text-center z-20">
            <div className="w-44 h-44 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-yellow-400 rounded-full opacity-70 flex items-center justify-center">
              <h3 className="font-bold text-xl text-black px-4">OUR MISSION</h3>
            </div>
            <p className="mt-4 mb-12 text-gray-700 text-sm md:text-base max-w-xs md:max-w-60 leading-relaxed px-2">
              To make travel stress-free, affordable, and full of memories. We
              aim to plan every detail perfectly so you can simply pack your
              bags, show up, and enjoy. Whether it’s your first trip or your
              fiftieth, our goal stays the same: To make you fall in love with
              travel.
            </p>
          </div>

          {/* Circle 3 */}
          <div className="shrink-0 relative flex flex-col items-center text-center z-30">
            <div className="w-44 h-44 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-yellow-400 rounded-full opacity-70 flex items-center justify-center">
              <h3 className="font-bold text-xl text-black px-4">OUR VISION</h3>
            </div>
            <p className="mt-4 mb-12 text-gray-700 text-sm md:text-base max-w-xs md:max-w-60 leading-relaxed px-2">
              To be the most loved travel brand that connects people with
              places, cultures, and experiences across the globe. We dream of a
              world where everyone gets to explore without worries — because
              when you travel, you grow, you laugh, and you live more fully.
            </p>
          </div>
        </div>
      </div>

      <WhyChooseUs />
    </main>
  );
}
