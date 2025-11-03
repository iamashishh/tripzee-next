import React from "react";
import Hero from "../components/global/Hero";
import OfferBanner from "../components/OfferBanner";
import WhyTripzeeSection from "../components/WhyTripzeeSection";
import FaqSection from "../components/FaqSection";
import Reviews from "../components/global/Reviews";
import ConnectWithExpert from "../components/ConnectWithExpert";

function page() {
  return (
    <main className="bg-white">
      <div className="max-container py-4 sm:py-6">
        <Hero
          title="Upcoming Trips"
          subtitle="Create Unforgettable Memories in the Heart of the Himalayas"
          backgroundImage="/assets/hero.jpg"
        />
      </div>
      <OfferBanner />
      <WhyTripzeeSection />
       <ConnectWithExpert />
          <FaqSection />
          <Reviews 
          title="Reviews"
          subtitle="We make travel simple and memorable. Explore dream destinations with zero stress."/>
   
    </main>
  );
}

export default page;
