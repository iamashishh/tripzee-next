import Image from "next/image";
import React from "react";

function ConectWithExpert() {
  return (
    <div className="max-container py-12 bg-white">
      <div className=" flex-col-reverse bg-[#FFFBDF] rounded-xl p-6 flex  md:flex-row justify-between md:items-center sm:gap-8 gap-4 relative">
        {/* TEXT */}
        <div className="max-w-[600px] flex flex-col gap-3">
          <h3 className="text-[22px] text-black md:text-[28px] font-semibold">
            Not sure where your next adventure should be?
          </h3>
          <p className="text-[15px] text-gray-800 leading-[1.45]">
            Leave the details to us! Our experts design trips that match your
            energy and bring your travel dreams alive.
          </p>

          <button className="bg-secondary py-2.5 sm:w-68  w-56 mt-2 rounded-full font-bold text-gray-800 hover:bg-yellow-500 transition-all">
            Connect with Expert
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
  );
}

export default ConectWithExpert;
