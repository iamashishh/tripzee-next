"use client";

import React from "react";
import Image from "next/image";
import { FiUser, FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const EnquiryForm: React.FC = () => {
  return (
    <section className="w-full bg-[#FAFAFA overflow-hidden py-16 md:py-24">
      <div className="max-container mx-auto px-5 sm:px-10 lg:px-16">
        {/* Section Title */}
        <h2 className="text-heading text-center mb-12">
          Let&apos;s plan your dream trip!
        </h2>

        {/* Form Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 ">
          {/* Left Image + Contact Info */}
          <div className="flex flex-col justify-between">
            {/* Image Section */}
            <div className="relative w-full h-80 lg:h-[450px] rounded-xl overflow-hidden">
              <Image
                src="/assets/contact.jpg"
                alt="Office Team"
                fill
                className="object-cover"
                priority
              />

              {/* Address Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-white text-black rounded-xl shadow-md p-4">
                <h3 className="text-sm sm:text-base font-semibold mb-1">
                  Office Address
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-gray-700">
                  Office No. 106 first floor, Flower Valley Fairy Tale CHS,
                  Khadakpada Cir, Kalyan, Maharashtra 421301
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="sm:border-t  border-gray-200 mt-10 pt-6 text-center sm:text-left flex flex-row justify-between items-center sm:items-start gap-6 md:gap-10">
              {/* Phone */}
              <div className="flex items-center gap-3">
                <FiPhone className="text-gray-700 text-lg" />
                <div className="text-left">
                  <p className="text-[12px]  font-semibold text-gray-800">Phone</p>
                  <p className="text-[12px] text-nowrap text-gray-600">
                    Office : +91 91369 70722
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <FiMail className="text-gray-700 text-lg" />
                <div className="text-left">
                  <p className="text-[12px] font-semibold text-gray-800">Email</p>
                  <p className="text-[12px] text-gray-600">
                    Tripzeeholidays@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Section */}
          <form className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-2">
                FULL NAME
              </label>
              <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
                <input
                  type="text"
                  placeholder=" Your Name"
                  className="w-full outline-none text-sm text-gray-800 placeholder-gray-400"
                />
                <FiUser className="text-gray-500" />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-2">
                EMAIL
              </label>
              <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
                <input
                  type="email"
                  placeholder="tripzeholidays@gmail.com"
                  className="w-full outline-none text-sm text-gray-800 placeholder-gray-400"
                />
                <FiMail className="text-gray-500" />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-2">
                PHONE NUMBER
              </label>
              <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
                <input
                  type="tel"
                  placeholder="+91 12345678"
                  className="w-full outline-none text-sm text-gray-800 placeholder-gray-400"
                />
                <FiPhone className="text-gray-500" />
              </div>
            </div>

            {/* Destination */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-2">
                DESTINATION
              </label>
              <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
                <input
                  type="text"
                  placeholder="Kashmir"
                  className="w-full outline-none text-sm text-gray-800 placeholder-gray-400"
                />
                <FiMapPin className="text-gray-500" />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-2">
                MESSAGE
              </label>
              <textarea
                placeholder="Type Here...."
                rows={3}
                className="w-full border border-gray-300 rounded-md p-3 text-sm text-gray-800 placeholder-gray-400 outline-none resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-yellow-400 text-black font-semibold rounded-full px-8 py-3 mt-2 shadow hover:bg-yellow-300 transition-all duration-300"
            >
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;
