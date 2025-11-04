"use client";
import React from "react";
import Image from "next/image";
import HeroSection from "../components/global/HeroSection";
import TopDestinations from "../components/TopDestinations";
import WhyChooseUs from "../components/WhyChooseUs";
import Reviews from "../components/global/Reviews";
import MomentsGallery from "../components/gallery";
import FaqSection from "../components/FaqSection";
import ContactSection from "../components/global/ContactSection";

function page() {
  const features = [
    {
      title: "What Makes Our Trips Different?",
      description: `We believe college trips aren’t just travel — they’re stories you’ll tell for years. Our curated experiences are packed with:`,
      points: [
        "Group games & bonfire nights",
        "Budget-friendly pricing",
        "Social mixers to make new friends",
        "Adventure activities for thrill-seekers",
      ],
      image: "/assets/hero.jpg",
    },
  ];

  return (
    <div className="bg-white">
      <HeroSection
        backgroundImage="/assets/bg.jpg"
        title={
          <>
            Trips That Define Your College Days! <br />
          </>
        }
        subtitle="Turn your college break into an unforgettable adventure! Whether it’s beaches, mountains, or wild treks — we craft budget-friendly group trips that bring friends closer and memories stronger.."
        ctaLabel="Plan Your College Trip:"
        buttonText="Enquiry Now"
        buttonLink="/enquiry-form"
      />

      <section className="w-full bg-white py-8 md:py-16">
        <div className="max-container mx-auto px-5 sm:px-10 lg:px-16">

          <div className="space-y-20 md:space-y-28">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-10 md:gap-14 ${
                  feature ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl lg:text-4xl font-semibold text-black mb-4 leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed whitespace-pre-line">
                    {feature.description}
                  </p>
                  <ul className="list-disc pl-6 text-sm sm:text-base text-gray-700 leading-relaxed space-y-1">
                    {feature.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>

                {/* Image Section */}
                <div className="flex-1 w-full">
                  <div className="relative w-full h-[220px] sm:h-[260px] md:h-[280px] lg:h-[400px] rounded-xl overflow-hidden">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover rounded-xl"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <TopDestinations
        sectionTitle="Top College Destinations"
        destinations={[
          { name: "Dubai", image: "/assets/hero.jpg" },
          { name: "Jaipur", image: "/assets/hero.jpg" },
          { name: "Vietnam", image: "/assets/hero.jpg" },
          { name: "Bali", image: "/assets/hero.jpg" },
          { name: "Udaipur", image: "/assets/hero.jpg" },
          { name: "Paris", image: "/assets/hero.jpg" },
          { name: "Goa", image: "/assets/hero.jpg" },
          { name: "Singapore", image: "/assets/hero.jpg" },
          { name: "Thailand", image: "/assets/hero.jpg" },
          { name: "Manali", image: "/assets/hero.jpg" },
        ]}
      />
      <WhyChooseUs />
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
      <Reviews />
      <div>
        {" "}
        <h1 className="text-3xl font-extrabold text-black max-container">
          Corporate Tours Moments!
        </h1>
        <MomentsGallery />
        <FaqSection title="Trip-zee FAQ'S" />
        <ContactSection />
      </div>
    </div>
  );
}

export default page;
