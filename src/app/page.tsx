import React from "react";
import OfferBanner from "./components/OfferBanner";
import DestinationCategories from "./components/pages/home/destination-categories";
import TripSection from "./components/sections/TripSection";
import HeroSection from "./components/HeroSection";
import ReelsCarousel from "./components/ReelsCarousel";
import ExploreMore from "./components/ExploreMore";
import FaqSection from "./components/FaqSection";
import BlogStories from "./components/blogs";
import WhyTripzeeSection from "./components/WhyTripzeeSection";
import Reviews from "./components/global/Reviews";
import ConnectWithExpert from "./components/ConnectWithExpert";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <HeroSection />
        <DestinationCategories />
        <OfferBanner />
        <TripSection title="Trending Trips" />
        <ReelsCarousel />
        <TripSection title="Popular Trips" />
        <OfferBanner />
        <ExploreMore />
        <WhyTripzeeSection />
        <ConnectWithExpert />
        <Reviews
          title="Customer Reviews"
          subtitle="See what our happy customers have to say about us"
        />
        <FaqSection />
        <BlogStories />
      </main>
    </div>
  );
}
