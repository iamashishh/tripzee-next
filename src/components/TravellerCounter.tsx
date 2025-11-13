"use client";
import React from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  incrementTraveller,
  decrementTraveller,
  type TravellerCount,
} from "../store/bookingSlice";

interface TravellerCounterProps {
  type: keyof TravellerCount;
  label: string;
  price: number;
}

const TravellerCounter: React.FC<TravellerCounterProps> = ({
  type,
  label,
  price,
}) => {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.booking.travellerCounts[type]);

  const handleIncrement = () => {
    dispatch(incrementTraveller(type));
  };

  const handleDecrement = () => {
    dispatch(decrementTraveller(type));
  };

  return (
    <div className="flex justify-between items-center py-3 border-b last:border-b-0">
      <div>
        <p className="font-medium text-black text-base">{label}</p>
        <p className="text-[12px] text-gray-500">
          Price: {price.toLocaleString("en-IN")} INR/-
        </p>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={handleDecrement}
          disabled={count === 0}
          className="w-7 h-7 border border-gray-300 rounded-full flex items-center justify-center text-lg font-bold text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          −
        </button>
        <span className="font-semibold text-gray-700 min-w-5 text-center">
          {count}
        </span>
        <button
          onClick={handleIncrement}
          className="w-7 h-7 border border-gray-300 rounded-full flex items-center justify-center text-lg font-bold text-gray-700 hover:bg-gray-100 transition-all"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default TravellerCounter;
