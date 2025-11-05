"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqSectionProps {
  /** Optional dynamic title for the FAQ section */
  title?: string;
}

const faqs = [
  {
    id: "01",
    question: "What Are Group Tours with Tripzee?",
    answer:
      "Group tours with Tripzee are crafted travel experiences where like-minded people travel together with expert assistance.",
  },
  {
    id: "02",
    question: "What Makes Tripzee Holidays Different?",
    answer:
      "We offer curated itineraries, expert guidance, and unique social experiences.",
  },
  {
    id: "03",
    question: "How do I Sign Up For A Trip With Tripzee?",
    answer:
      "You can visit our website, explore upcoming trips, and register through the contact page.",
  },
  {
    id: "04",
    question: "Is Traveling With Tripzee Safe For Solo Travelers?",
    answer:
      "Absolutely! We ensure safety, group engagement, and support throughout the trip.",
  },
  {
    id: "05",
    question: "I’m a Solo Traveler - Can I Join Your Trips?",
    answer:
      "Yes! Most of our travelers are solo travelers. You’ll make friends real quick.",
  },
  {
    id: "06",
    question: "Can Trip-Zee Help Organize A Private Trip?",
    answer:
      "Yes, we offer custom itineraries for private groups and corporate groups.",
  },
  {
    id: "07",
    question: "Do Your Package Include Flights?",
    answer:
      "Packages usually exclude flights, but we can assist you with the best flight options.",
  },
];

const FaqSection: React.FC<FaqSectionProps> = ({ title = "FAQ's" }) => {
  return (
    <main className="overflow-hidden py-12 bg-white">
      <section className="w-full flex justify-center">
        <div className="w-full max-w-5xl bg-[#FFFCED] rounded-3xl py-10 px-6 md:px-10 shadow-sm">
          {/* ✅ Dynamic Title */}
          <h2 className="text-center text-black text-3xl font-bold mb-10">
            {title}
          </h2>

          {/* Accordion */}
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="rounded-xl border border-transparent bg-transparent"
              >
                <AccordionTrigger className="flex items-center">
                  <div className="flex items-start gap-6 text-lg font-semibold w-full">
                    <span className="text-black md:text-lg text-base">
                      {faq.id}
                    </span>
                    <span className="text-black md:text-lg text-base">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="ml-[50px] text-neutral-600 text-sm leading-relaxed">
                  {faq.answer}
                </AccordionContent>

                {index !== faqs.length - 1 && (
                  <div className="w-full  sm:my-2">
                    <div className="h-px  w-full bg-linear-to-r from-transparent via-black to-transparent"></div>
                  </div>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </main>
  );
};

export default FaqSection;
