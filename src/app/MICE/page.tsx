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
  // Array of static data for "Why Companies Love Traveling With Us"
  const features = [
    {
      title: "Tailored Trips That Fit Your Company’s Goals and Budget",
      description: `Every organization is different — so why settle for a one-size-fits-all trip? We design custom corporate itineraries that align perfectly with your team’s size, objectives, and budget.

Whether you're planning a relaxing offsite by the beach, a leadership retreat in the hills, or an incentive trip abroad, our travel experts curate the ideal mix of work, leisure, and team engagement.`,
      image: "/assets/hero.jpg",
    },
    {
      title: "From Transport to Activities — We Handle It All",
      description: `Forget the stress of coordination — we manage every detail, from travel bookings and stay arrangements to logistics and activities.

Our dedicated corporate travel managers ensure a smooth, end-to-end experience so your team can focus on what matters — building connections and creating memories. With MICA, corporate travel feels effortless, not exhausting.`,
      image: "/assets/hero.jpg",
      reverse: true,
    },
    {
      title: "Fun & Engaging Experiences to Build Stronger Teams",
      description: `We don’t just plan trips — we build experiences that bring teams closer.

Our itineraries include team-building games, adventure challenges, cultural experiences, and relaxation moments that strengthen collaboration and communication. From bonfire nights to adventure sports, we make sure every employee returns home motivated, connected, and inspired.`,
      image: "/assets/hero.jpg",
    },
    {
      title: "Seamless Corporate Travel Management",
      description: `From pre-trip planning to post-trip feedback, we make the entire process seamless. 

Our expert planners handle everything — itineraries, accommodations, transport, and event coordination — so your company’s travel feels effortless and enjoyable.`,
      image: "/assets/hero.jpg",
      reverse: true,
    },
  ];

  return (
    <div className="bg-white">
      <HeroSection
        backgroundImage="/assets/bg.jpg"
        title={
          <>
            Work Hard, Travel Smarter <br />
            <span>– Corporate Trips Redefined</span>
          </>
        }
        subtitle="Boost team bonding, reward top performers, and explore world-class destinations — all planned seamlessly by MICA."
        ctaLabel="Plan Your Corporate Trip:"
        buttonText="Enquiry Now"
        buttonLink="/enquiry-form"
      />

      <section className="w-full bg-white py-8 md:py-12">
        <div className="max-container mx-auto px-5 sm:px-10 lg:px-16">
          {/* Section Title */}
          <h2 className="text-center text-heading mb-14">
            Why Companies Love Traveling with Us
          </h2>

          {/* Features */}
          <div className="space-y-20 md:space-y-28">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-10 md:gap-14 ${
                  feature.reverse ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Text Section */}
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-black mb-4 leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed whitespace-pre-line">
                    {feature.description}
                  </p>
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
        sectionTitle="Top Corporate Destinations"
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
        <h1 className="text-heading max-container">
          Corporate Tours Moments!
        </h1>
        <MomentsGallery />
        <FaqSection title="Trip-zee FAQ'S" />
        <ContactSection/>
      </div>
    </div>
  );
}

export default page;
