"use client";
import React from "react";
import { FiHeadphones } from "react-icons/fi"; // you can replace icon if needed

const WhyChooseUs: React.FC = () => {
  return (
    <section className="w-full bg-white py-8 md:py-12">
      <div className="max-container mx-auto px-5 sm:px-10 lg:px-16 ">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-black mb-14">
          Why Choose Us!
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-14 h-14 flex items-center justify-center bg-gray-100 rounded-md">
                <FiHeadphones className="text-3xl text-gray-800" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-black">
                Custom-Built Packages
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                nec, proin faucibus nibh et sagittis a.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-14 h-14 flex items-center justify-center bg-gray-100 rounded-md">
                <FiHeadphones className="text-3xl text-gray-800" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-black">
                Custom-Built Packages
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                nec, proin faucibus nibh et sagittis a.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-14 h-14 flex items-center justify-center bg-gray-100 rounded-md">
                <FiHeadphones className="text-3xl text-gray-800" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-black">
                Custom-Built Packages
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                nec, proin faucibus nibh et sagittis a.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-14 h-14 flex items-center justify-center bg-gray-100 rounded-md">
                <FiHeadphones className="text-3xl text-gray-800" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-black">
                Custom-Built Packages
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                nec, proin faucibus nibh et sagittis a.
              </p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-14 h-14 flex items-center justify-center bg-gray-100 rounded-md">
                <FiHeadphones className="text-3xl text-gray-800" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-black">
                Custom-Built Packages
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                nec, proin faucibus nibh et sagittis a.
              </p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-14 h-14 flex items-center justify-center bg-gray-100 rounded-md">
                <FiHeadphones className="text-3xl text-gray-800" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-black">
                Custom-Built Packages
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                nec, proin faucibus nibh et sagittis a.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
