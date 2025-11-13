"use client";
import { useState } from "react";
import Image from "next/image";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";
import FaqSection from "../components/FaqSection";
import Reviews from "../components/global/Reviews";
import TripSection from "../components/sections/TripSection";
import BookingWidget from "../../components/BookingWidget";
import PriceDisplay from "../../components/PriceDisplay";

// Inline SVG icon components to avoid react-icons dependency issues
const IconMap = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path
      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 11 7 11s7-5.75 7-11c0-3.87-3.13-7-7-7z"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="9" r="2.5" fill="currentColor" />
  </svg>
);

const IconClock = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1" />
    <path
      d="M12 7v5l3 2"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconGroup = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path
      d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zM8 11c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3z"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 20c0-2.21 3.58-4 8-4s8 1.79 8 4"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconCheck = ({ className = "w-4 h-4" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path
      d="M20 6L9 17l-5-5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconClose = ({ className = "w-4 h-4" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path
      d="M18 6L6 18M6 6l12 12"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function TourDetails() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [openItineraryIndex, setOpenItineraryIndex] = useState<number | null>(null);

  const policies = [
    {
      title: "Cancellation Policy",
      content:
        "Cancellations made within 24 hours of booking will receive a full refund. After that, partial or no refund may apply depending on the package terms.",
    },
    {
      title: "Refund Policy",
      content:
        "Refunds are processed within 7-10 business days. Refund amounts depend on cancellation time and booking conditions.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const IconChevronDown = ({ className = "w-5 h-5" }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const GallerySection = () => {
    const images = [
      { id: 1, src: "/assets/hero.jpg", alt: "Jodhpur Fort" },
      { id: 2, src: "/assets/contact.jpg", alt: "Jaisalmer Sunset" },
      { id: 3, src: "/assets/honeymoon.png", alt: "Jaipur Palace" },
      { id: 4, src: "/assets/tripcardsimg.webp", alt: "Rajasthan Heritage" },
      { id: 5, src: "/assets/tripcardsimg.webp", alt: "Rajasthan Heritage" },
      { id: 6, src: "/assets/tripcardsimg.webp", alt: "Rajasthan Heritage" },
      { id: 7, src: "/assets/tripcardsimg.webp", alt: "Rajasthan Heritage" },
      { id: 8, src: "/assets/tripcardsimg.webp", alt: "Rajasthan Heritage" },
      { id: 9, src: "/assets/tripcardsimg.webp", alt: "Rajasthan Heritage" },
      { id: 10, src: "/assets/tripcardsimg.webp", alt: "Rajasthan Heritage" },
      { id: 11, src: "/assets/tripcardsimg.webp", alt: "Rajasthan Heritage" },
      { id: 12, src: "/assets/tripcardsimg.webp", alt: "Rajasthan Heritage" },
      { id: 13, src: "/assets/tripcardsimg.webp", alt: "Rajasthan Heritage" },
      { id: 14, src: "/assets/tripcardsimg.webp", alt: "Rajasthan Heritage" },
      { id: 15, src: "/assets/tripcardsimg.webp", alt: "Rajasthan Heritage" },
      { id: 16, src: "/assets/tripcardsimg.webp", alt: "Rajasthan Heritage" },
      { id: 17, src: "/assets/tripcardsimg.webp", alt: "Rajasthan Heritage" },
      { id: 18, src: "/assets/tripcardsimg.webp", alt: "Rajasthan Heritage" },
      { id: 19, src: "/assets/tripcardsimg.webp", alt: "Rajasthan Heritage" },
      { id: 20, src: "/assets/tripcardsimg.webp", alt: "Rajasthan Heritage" },
      { id: 21, src: "/assets/tripcardsimg.webp", alt: "Rajasthan Heritage" },
      { id: 22, src: "/assets/tripcardsimg.webp", alt: "Rajasthan Heritage" },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrev = () => {
      setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = () => {
      setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
      <section className="relative w-full max-w-5xl mx-auto mt-12 mb-16">
        {/* Main Image */}
        <div className="relative w-full overflow-hidden rounded-3xl shadow-lg">
          <Image
            key={images[activeIndex].id}
            src={images[activeIndex].src}
            alt={images[activeIndex].alt}
            width={1200}
            height={700}
            className="w-full h-[450px] sm:h-[520px] object-cover transition-all duration-500 ease-in-out rounded-3xl"
          />

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-black w-9 h-9 rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-all"
          >
            <span className="text-lg font-bold">‹</span>
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#FFCC00] text-black w-9 h-9 rounded-full flex items-center justify-center shadow-md hover:bg-yellow-400 transition-all"
          >
            <span className="text-lg font-bold">›</span>
          </button>

          {/* Small Preview Thumbnails */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-60 sm:w-[280px] h-20 sm:h-24 overflow-hidden">
            <div
              className="flex items-center h-full transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${Math.max(
                  0,
                  Math.min((activeIndex - 1) * 48, (images.length - 4) * 48)
                )}px)`,
              }}
            >
              {images.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => setActiveIndex(index)}
                  className={`relative w-16 h-16 sm:w-18 sm:h-18 rounded-full overflow-hidden border-2 transition-all duration-300 shadow-md hover:scale-110 hover:z-10 shrink-0 ${
                    activeIndex === index
                      ? "border-[#FFCC00] ring-2 ring-[#FFCC00]/50 z-20"
                      : "border-white"
                  } ${index > 0 ? "-ml-3 sm:-ml-4" : ""}`}
                  style={{
                    zIndex: activeIndex === index ? 20 : 10 - index,
                    visibility:
                      index < 4 || activeIndex >= index - 2
                        ? "visible"
                        : "hidden",
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={100}
                    height={100}
                    className="object-cover w-full h-full"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <main>
      <div className=" flex flex-col">
        <Image
          src="/assets/hero.jpg"
          alt="Description of image"
          width={500}
          height={500}
          className="h-[540px] w-full object-cover"
        />
      </div>
      <div className="w-full bg-white py-10 md:py-16">
        <div className="max-container mx-auto px-5 lg:px-10 grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-10">
          {/* LEFT CONTENT */}
          <div className="min-h-screen">
            {/* TITLE SECTION */}
            <h1 className="text-heading mb-4 sm:mb-6">
              Rajasthan: Jodhpur- Jaisalmer- Jaipur
            </h1>

            {/* ICON INFO */}
            <div className="flex flex-wrap sm:flex-nowrap  items-center  gap-3 sm:gap-6 mb-6 sm:mb-8 text-gray-700 text-[11px] sm:text-lg font-semibold">
              <div className="flex items-center gap-1 sm:gap-2 min-w-fit">
                <span className="text-[#FFCC00] inline-flex">
                  <IconMap className="w-4 h-4 sm:w-5 sm:h-5" />
                </span>
                <span>Dubai - Dubai</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 min-w-fit">
                <span className="text-[#FFCC00] inline-flex">
                  <IconClock className="w-4 h-4 sm:w-5 sm:h-5" />
                </span>
                <span>5 Days & 6 Nights</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 min-w-fit">
                <span className="text-[#FFCC00] inline-flex">
                  <IconGroup className="w-4 h-4 sm:w-5 sm:h-5" />
                </span>
                <span>Group Tour</span>
              </div>
            </div>

            {/* TRIP OVERVIEW BOX */}
            <div className="border-t border-[#FFCC00]/30 rounded-md bg-linear-to-b from-[#FFFDEE] to-transparent p-5 sm:p-6 mb-8">
              <h3 className="text-lg sm:text-2xl font-semibold mb-3 text-black">
                Trip Overview
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Embark on a journey through Rajasthan&apos;s stunning landscapes
                and vibrant cityscapes. From the iconic cities of Jodhpur to the
                bustling markets of Jaipur, each stop offers a unique blend of
                luxury and Tradition .....
              </p>
              <Drawer>
                <DrawerTrigger className="font-semibold cursor-pointer text-black ml-1 border border-[#FFCC00] px-4 py-2 rounded-2xl hover:bg-[#FFCC00] hover:text-black transition-all mt-4 inline-block">
                  Read More
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle className="text-black">
                      About Rajasthan Tour Package
                    </DrawerTitle>
                    <DrawerDescription className="text-black leading-relaxed text-[15px] mt-3">
                      Embark on a journey through Rajasthan&apos;s stunning
                      landscapes and vibrant cityscapes. From the iconic cities
                      of Jodhpur to the bustling markets of Jaipur, each stop
                      offers a unique blend of luxury and tradition. Discover
                      the majestic forts and palaces that tell tales of a
                      glorious past, while experiencing the warm hospitality and
                      rich culture that make Rajasthan truly unforgettable. Our
                      carefully curated tour package ensures you experience the
                      best of what this incredible state has to offer, from
                      camel safaris in the Thar Desert to exploring the pink
                      city of Jaipur. Whether you&apos;re interested in history,
                      culture, or adventure, Rajasthan has something special for
                      every traveler. Join us on this magical journey through
                      the land of kings and create memories that will last a
                      lifetime.
                    </DrawerDescription>
                  </DrawerHeader>
                </DrawerContent>
              </Drawer>
            </div>
            <div className=" w-full h-px bg-gray-300 my-4"></div>

            {/* TRIP HIGHLIGHTS */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold mb-3 text-black">
                Trip Highlights
              </h3>
              <p className="text-gray-700 text-[13px] sm:text-base mb-5 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation.
              </p>

              <ul className="list-disc text-[14px] sm:text-base pl-6 space-y-2 text-gray-700">
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </li>
              </ul>
            </div>

            {/* TRIP ITINERARY SECTION */}
            <div className="border-t pt-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-black">
                Trip Itinerary
              </h3>

              {[1, 2, 3, 4, 5, 6].map((day) => (
                <div
                  key={day}
                  className="flex justify-between items-center border border-gray-200 rounded-2xl px-4 py-3 mb-3 shadow-sm hover:shadow-md transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="bg-black text-white text-sm font-semibold px-3 py-1 rounded-full">
                      Day {day}
                    </span>
                    <p className="text-gray-800 font-medium">
                      Your City - Jodhpur
                    </p>
                  </div>
                  <span className="text-xl font-bold text-gray-500">+</span>
                </div>
              ))}
            </div>

            {/* PACKAGE BREAKDOWN SECTION */}
            <div className="border-t pt-8 mt-8">
              <h3 className="sm:text-2xl text-xl font-bold mb-5 text-black">
                Package Breakdown
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 border border-gray-200 rounded-xl overflow-hidden divide-y md:divide-y-0 md:divide-x">
                <div className="p-4">
                  <h4 className="font-semibold text-base mb-2 text-gray-900">
                    Trip Inclusion:
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    {[...Array(7)].map((_, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-green-500 mt-0.5">
                          <IconCheck className="w-4 h-4" />
                        </span>
                        <span className="text-[12px] font-medium">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4">
                  <h4 className="font-semibold text-base mb-2 text-gray-900">
                    Trip Exclusion:
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    {[...Array(7)].map((_, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-red-500 mt-0.5">
                          <IconClose className="w-4 h-4" />
                        </span>
                        <span className="text-[12px] font-medium">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="border-t pt-8 mt-8">
              <h3 className="sm:text-2xl text-xl font-bold mb-5 text-black">
                Trip Costing
              </h3>
              <div className="overflow-hidden rounded-lg border border-gray-200">
                <table className="w-full text-left text-gray-700">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 font-semibold">Sharing Type</th>
                      <th className="px-6 py-3 font-semibold">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        type: "Double Sharing",
                        price: "Rs. 1400/-",
                      },
                      { type: "Triple Sharing", price: "Rs. 1400/-" },
                      { type: "Four Sharing", price: "Rs. 1400/-" },
                    ].map((option, i) => (
                      <tr key={i} className="border-t">
                        <td className="px-6 py-4">{option.type}</td>
                        <td className="px-6 py-4">{option.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            {/* TRAVELLING OPTIONS */}
            <div className="border-t pt-8 mt-8">
              <h3 className="sm:text-2xl text-xl font-bold mb-5 text-black">
                Travelling Options
              </h3>
              <div className="overflow-hidden rounded-lg border border-gray-200">
                <table className="w-full text-left text-gray-700">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 font-semibold">Travel Type</th>
                      <th className="px-6 py-3 font-semibold">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        type: "Train (Both side sleeper)",
                        price: "Rs. 1400/-",
                      },
                      { type: "Train (Both side 3AC)", price: "Rs. 1400/-" },
                      { type: "Flight", price: "Rs. 1400/-" },
                    ].map((option, i) => (
                      <tr key={i} className="border-t">
                        <td className="px-6 py-4">{option.type}</td>
                        <td className="px-6 py-4">{option.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* GALLERY SECTION */}
            <div className="border-t pt-10 mt-10">
              <h3 className="text-xl sm:text-2xl font-bold mb-5 text-black">
                Gallery
              </h3>

              <GallerySection />
            </div>
            {/* KNOW BEFORE YOU GO */}
            <div className="border-t pt-10 mt-10">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-black">
                Know Before You Go
              </h3>
              <p className="text-gray-700 mb-5 text-[14px] leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation.
              </p>

              <ul className="list-disc pl-6 space-y-2 text-[14px] text-gray-700">
                {[...Array(4)].map((_, i) => (
                  <li key={i}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </li>
                ))}
              </ul>
            </div>

            {/* POLICY ACCORDION SECTION - Mobile: appears here, Desktop: hidden */}
            <div className="lg:hidden border-t pt-10 mt-10">
              <div className="w-full mx-auto space-y-3">
                {policies.map((item, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full flex justify-between items-center px-5 py-4 text-left text-gray-900 font-medium hover:bg-gray-50 transition"
                    >
                      <span>{item.title}</span>
                      <IconChevronDown
                        className={`w-5 h-5 text-gray-700 transform transition-transform duration-300 ${
                          openIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`px-5 pb-4 text-gray-600 text-sm transition-all duration-300 ease-in-out ${
                        openIndex === index
                          ? "max-h-40 opacity-100"
                          : "max-h-0 opacity-0 overflow-hidden"
                      }`}
                    >
                      {item.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="lg:sticky lg:top-32 lg:h-fit space-y-6">
            <div className="bg-white border rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <PriceDisplay />
                <button className="w-full bg-secondary text-base hover:bg-[#FFD633] text-black font-semibold py-3 rounded-full transition-all">
                  Book Now
                </button>
              </div>
              <button className="w-full bg-black text-sm text-white py-3 font-medium hover:bg-gray-800 transition-all">
                Download Itinerary
              </button>
            </div>

            <BookingWidget />
          </div>

          {/* POLICY ACCORDION SECTION - Desktop: appears here, Mobile: hidden */}
          <div className="hidden lg:block border-t pt-10 mt-10">
            <div className="w-full mx-auto space-y-3">
              {policies.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex justify-between items-center px-5 py-4 text-left text-gray-900 font-medium hover:bg-gray-50 transition"
                  >
                    <span>{item.title}</span>
                    <IconChevronDown
                      className={`w-5 h-5 text-gray-700 transform transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`px-5 pb-4 text-gray-600 text-sm transition-all duration-300 ease-in-out ${
                      openIndex === index
                        ? "max-h-40 opacity-100"
                        : "max-h-0 opacity-0 overflow-hidden"
                    }`}
                  >
                    {item.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Reviews />
      <FaqSection />
      <TripSection title="Similar Packages" />
    </main>
  );
}
