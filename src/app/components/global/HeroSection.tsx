"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface HeroSectionProps {
  /** Background image path (e.g. "/assets/corporate-hero.jpg") */
  backgroundImage: string;
  /** Main title (supports line breaks with `<br />`) */
  title: string | React.ReactNode;
  /** Subtitle or supporting text */
  subtitle: string;
  /** Small text above the button */
  ctaLabel?: string;
  /** Text displayed inside the CTA button */
  buttonText: string;
  /** Link path for the CTA button */
  buttonLink: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImage,
  title,
  subtitle,
  ctaLabel,
  buttonText,
  buttonLink,
}) => {
  return (
    <section className="relative w-full h-[80vh] md:h-[70vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt="Hero background"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Black Overlay Layer */}
      <div className="absolute inset-0 bg-black/50 z-[1]" />

      {/* Content */}
      <div className="relative z-[2] max-container  justify-between  px-6 sm:px-10 lg:px-20 text-white">
        <div className="max-w-2xl pb-20  md:max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-snug mt-25">
            {title}
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed mb-8">
            {subtitle}
          </p>
        </div>
        <div>
          {ctaLabel && (
            <p className="text-sm sm:text-base font-semibold mb-3 text-white/90">
              {ctaLabel}
            </p>
          )}

          <Link
            href={buttonLink}
            className="inline-block bg-yellow-400 text-black font-semibold px-7 py-2.5 rounded-full shadow-md hover:bg-yellow-300 transition-all text-sm sm:text-base"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
