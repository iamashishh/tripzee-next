import React from "react";
import Hero from "../components/global/Hero";
import TripCard from "../components/cards/trip-cards";
import Image from "next/image";
import Reviews from "../components/global/Reviews";
import WhyTripzeeSection from "../components/WhyTripzeeSection";
import FaqSection from "../components/FaqSection";
import BlogStories from "../components/blogs";
import MomentsGallery from "../components/gallery";

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
  },{
    image: "/assets/hero.jpg",
    days: "5D/4N",
    title: "Shimla Manali Tour",
    location: "Himachal Pradesh",
    date: "15 Nov - 20 Nov",
    batches: "3 ",
    price: "₹12,999",
    oldPrice: "₹15,999",
    badge: "Best Seller",
  },{
    image: "/assets/hero.jpg",
    days: "5D/4N",
    title: "Shimla Manali Tour",
    location: "Himachal Pradesh",
    date: "15 Nov - 20 Nov",
    batches: "3 ",
    price: "₹12,999",
    oldPrice: "₹15,999",
    badge: "Best Seller",
  },{
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

function page() {
  return (
    <main className="bg-white  py-4">
      <div className="max-container">
        <Hero
          title="Honeymoon Escapes"
          subtitle="Celebrate Your Love with Our Exclusive Honeymoon Packages"
          backgroundImage="/assets/honeymoon.png"
        />
      </div>
      <div className="max-container overflow-hidden py-6 sm:py-12">
        <h1 className="text-2xl sm:text-3xl font-bold text-black mb-6">
          Honeymoon Escapes
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
      <div className="max-container sm:py-12 py-6 bg-white">
        <div className=" flex-col-reverse bg-[#FF69B21F] rounded-xl p-6 flex  md:flex-row justify-between md:items-center sm:gap-8 gap-4 relative">
          {/* TEXT */}
          <div className="max-w-[600px] flex flex-col gap-3">
            <h3 className="text-[22px] text-black md:text-[28px] font-semibold">
              The Perfect Couple Getaway
            </h3>
            <p className="text-[15px] text-gray-800 leading-[1.45]">
              Celebrate your new chapter with dreamy destinations, intimate
              stays, and unforgettable moments — perfectly tailored for two.
            </p>

            <button className="bg-secondary py-2.5 sm:w-68  w-56 mt-2 rounded-full font-bold text-gray-800 hover:bg-yellow-500 transition-all">
              Start Your Journey
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
         <div>
           {" "}
           <h1 className="text-3xl font-extrabold text-black max-container">
              Moments!
           </h1>
               <MomentsGallery/>
   
         </div>
      <div className=""><Reviews /> </div>
      
      <WhyTripzeeSection />
      <FaqSection title="Trip-zee FAQ'S" />
      <BlogStories />
    </main>
  );
}

export default page;
