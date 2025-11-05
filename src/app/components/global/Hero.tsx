"use client";

import Image from "next/image";

interface HeroProps {
  title: string;
  subtitle?: string;
  buttonText?: string; // optional text
  onButtonClick?: () => void; // optional action
  backgroundImage: string;
  showButton?: boolean; // ✅ new prop to control button visibility
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle = "",
  buttonText = "Request a Callback",
  onButtonClick,
  backgroundImage,
  showButton = true, // default is true
}) => {
  return (
    <section className="relative rounded-2xl overflow-hidden w-full h-[260px] sm:h-[300px] md:h-[380px] lg:h-[400px] flex items-center">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt={title}
        fill
        className="object-cover"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative text-white px-5 mt-24 sm:px-10 max-w-2xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="text-sm sm:text-base md:text-xl text-white/90 mt-2">
            {subtitle}
          </p>
        )}

        {/* ✅ Button only renders if showButton is true */}
        {showButton && (
          <button
            onClick={onButtonClick}
            className="mt-5 inline-block bg-yellow-400 text-black font-semibold px-4 sm:px-6 py-2 rounded-full shadow hover:bg-yellow-300 transition"
          >
            {buttonText}
          </button>
        )}
      </div>
    </section>
  );
};

export default Hero;
