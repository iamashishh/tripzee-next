"use client";
import BlogStories from "../components/blogs";
import TripCard from "../components/cards/trip-cards";
import FaqSection from "../components/FaqSection";
import { CalloutBanner } from "../components/global/CalloutBanner";
import Hero from "../components/global/Hero";
import OfferBanner from "../components/OfferBanner";
import DestinationCategories from "../components/pages/home/destination-categories";
import WhyTripzeeSection from "../components/WhyTripzeeSection";
import Reviews from "../components/global/Reviews";

const data = [
  {
    image: "/assets/tripcardsimg.webp",
    days: "5D/4N",
    title: "Shimla Manali Tour",
    location: "Himachal Pradesh",
    date: "15 Nov - 20 Nov",
    batches: "3 ",
    price: "₹12,999",
    oldPrice: "₹15,999",
    badge: "Best Seller",
  },
  {
    image: "/assets/tripcardsimg.webp",
    days: "5D/4N",
    title: "Shimla Manali Tour",
    location: "Himachal Pradesh",
    date: "15 Nov - 20 Nov",
    batches: "3 ",
    price: "₹12,999",
    oldPrice: "₹15,999",
    badge: "Best Seller",
  },
  {
    image: "/assets/tripcardsimg.webp",
    days: "5D/4N",
    title: "Shimla Manali Tour",
    location: "Himachal Pradesh",
    date: "15 Nov - 20 Nov",
    batches: "3 ",
    price: "₹12,999",
    oldPrice: "₹15,999",
    badge: "Best Seller",
  },
  {
    image: "/assets/tripcardsimg.webp",
    days: "5D/4N",
    title: "Shimla Manali Tour",
    location: "Himachal Pradesh",
    date: "15 Nov - 20 Nov",
    batches: "3 ",
    price: "₹12,999",
    oldPrice: "₹15,999",
    badge: "Best Seller",
  },
  {
    image: "/assets/hero.jpg",
    days: "5D/4N",
    title: "Shimla Manali Tour",
    location: "Himachal Pradesh",
    date: "15 Nov - 20 Nov",
    batches: "3 ",
    price: "₹12,999",
    oldPrice: "₹15,999",
    badge: "Best Seller",
  },
  {
    image: "/assets/hero.jpg",
    days: "5D/4N",
    title: "Shimla Manali Tour",
    location: "Himachal Pradesh",
    date: "15 Nov - 20 Nov",
    batches: "3 ",
    price: "₹12,999",
    oldPrice: "₹15,999",
    badge: "Best Seller",
  },
  {
    image: "/assets/hero.jpg",
    days: "5D/4N",
    title: "Shimla Manali Tour",
    location: "Himachal Pradesh",
    date: "15 Nov - 20 Nov",
    batches: "3 ",
    price: "₹12,999",
    oldPrice: "₹15,999",
    badge: "Best Seller",
  },
  {
    image: "/assets/hero.jpg",
    days: "5D/4N",
    title: "Shimla Manali Tour",
    location: "Himachal Pradesh",
    date: "15 Nov - 20 Nov",
    batches: "3 ",
    price: "₹12,999",
    oldPrice: "₹15,999",
    badge: "Best Seller",
  },
];

export default function HimachalPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="max-container py-4 sm:py-6">
        <Hero
          title="Himachal Tour Packages"
          subtitle="Create Unforgettable Memories in the Heart of the Himalayas"
          backgroundImage="/assets/hero.jpg"
        />
      </div>
      <div className=" mx-6">
        <CalloutBanner />
      </div>
      {/* All Tour Packages */}
      <div className="max-container overflow-hidden py-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-black mb-6">
          All Tour Packages
        </h1>

        <div
          className="
    grid gap-6
    place-items-center
    grid-cols-1
    sm:grid-cols-2
    md:grid-cols-2
    lg:grid-cols-4
  "
        >
          {data.map((trip, index) => (
            <TripCard
              key={index}
              image={trip.image}
              title={trip.title}
              location={trip.location}
              date={trip.date}
              batches={trip.batches}
              price={trip.price}
              oldPrice={trip.oldPrice}
              badge={trip.badge}
            />
          ))}
        </div>
      </div>

      {/* Remaining Sections */}
      <OfferBanner />
      <DestinationCategories />
      <WhyTripzeeSection />

      <div className="bg-gray-100 py-12"><Reviews /></div>
      <FaqSection />
      <BlogStories />
    </main>
  );
}
