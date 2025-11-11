"use client";
import { useState } from "react";
import TripCard from "../cards/trip-cards";
import { Filter } from "lucide-react";

export const tripsData = [
  {
    image: "/assets/tripcardsimg.webp",
    title: "Delhi → Kasol – Manali",
    location: "Delhi - Delhi",
    date: "5 Nov",
    batches: "+2",
    price: "50,000 INR/-",
    oldPrice: "89,999 INR/-",
    badge: "Group Tour",
  },
  {
    image: "/assets/tripcardsimg.webp",
    title: "Manali Adventure Trip",
    location: "Delhi - Manali",
    date: "9 Nov",
    batches: "+1",
    price: "42,499 INR/-",
    oldPrice: "65,999 INR/-",
    badge: "Trending",
  },
  {
    image: "/assets/tripcardsimg.webp",
    title: "Srinagar – Gulmarg",
    location: "Delhi - Kashmir",
    date: "12 Nov",
    batches: "+3",
    price: "35,000 INR/-",
    oldPrice: "57,999 INR/-",
    badge: "Special Offer",
  },
  {
    image: "/assets/tripcardsimg.webp",
    title: "Shimla – Kullu – Manali",
    location: "Delhi - Himachal",
    date: "14 Nov",
    batches: "+4",
    price: "28,999 INR/-",
    oldPrice: "44,999 INR/-",
    badge: "Best Seller",
  },
  {
    image: "/assets/tripcardsimg.webp",
    title: "Delhi → Kasol",
    location: "Delhi - Kasol",
    date: "18 Nov",
    batches: "+2",
    price: "38,500 INR/-",
    oldPrice: "52,999 INR/-",
    badge: "Group Tour",
  },
  {
    image: "/assets/tripcardsimg.webp",
    title: "Manali Snow Tour",
    location: "Delhi - Manali",
    date: "20 Nov",
    batches: "+1",
    price: "29,999 INR/-",
    oldPrice: "45,000 INR/-",
    badge: "Snowfall",
  },
  {
    image: "/assets/tripcardsimg.webp",
    title: "Delhi → Kasol – Manali",
    location: "Delhi - Delhi",
    date: "23 Nov",
    batches: "+2",
    price: "50,000 INR/-",
    oldPrice: "89,999 INR/-",
    badge: "Group Tour",
  },
  {
    image: "/assets/tripcardsimg.webp",
    title: "Goa Beach Party Trip",
    location: "Mumbai - Goa",
    date: "9 Dec",
    batches: "+1",
    price: "22,499 INR/-",
    oldPrice: "29,999 INR/-",
    badge: "Party",
  },
  {
    image: "/assets/tripcardsimg.webp",
    title: "Christmas Himachal Tour",
    location: "Delhi - Himachal",
    date: "25 Dec",
    batches: "+2",
    price: "32,999 INR/-",
    oldPrice: "55,999 INR/-",
    badge: "Christmas Special",
  },
];

const dates = [
  "All",
  "5 Nov",
  "9 Nov",
  "12 Nov",
  "14 Nov",
  "18 Nov",
  "20 Nov",
  "23 Nov",
  "9 Dec",
  "25 Dec",
];

export default function TripsFilter() {
  const [selectedDate, setSelectedDate] = useState("All");

  const filteredTrips =
    selectedDate === "All"
      ? tripsData
      : tripsData.filter((trip) => trip.date.includes(selectedDate));

  return (
    <div className="space-y-6 py-12 max-container">
         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
      {/* Heading */}
      <h1 className="text-heading tracking-tight">
        All Upcoming Trips
      </h1>

      {/* Filters Container */}
      <div className="flex items-center hide-scrollbar bg-[#F7F7F7] rounded px-2 py-2 border border-gray-200 overflow-x-auto scrollbar-hide">
        
        {/* Date Pills */}
        <div className="flex gap-2 pr-1">
          {dates.map((d) => (
            <button
              key={d}
              onClick={() => setSelectedDate(d)}
              className={`px-3 py-1.5 text-[14px] rounded transition font-medium whitespace-nowrap ${
                selectedDate === d
                  ? "bg-[#333] text-white"
                  : "text-black"
              }`}
            >
              {d}
            </button>
          ))}
        </div>

        {/* Divider */}
        <div className="h-6 w-px bg-gray-300"></div>

        {/* Filters button */}
        <button className="ml-3 flex items-center gap-2 bg-black text-white px-4 py-1.5 rounded font-medium text-sm whitespace-nowrap">
          Filters
          <Filter size={16} />
        </button>
      </div>
    </div>

      {/* Grid */}
      <div
        className="grid  gap-6 justify-center 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-2 
        lg:grid-cols-4"
      >
        {filteredTrips.map((trip, index) => (
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

      {filteredTrips.length === 0 && (
        <p className="text-center text-gray-500">
          No trips available on this date 😕
        </p>
      )}
    </div>
  );
}
