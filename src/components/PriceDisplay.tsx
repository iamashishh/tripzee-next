"use client";
import React from "react";
import { useAppSelector } from "../store/hooks";

const PriceDisplay: React.FC = () => {
  const { totalPrice, basePrice } = useAppSelector((state) => state.booking);

  const displayPrice = totalPrice > 0 ? totalPrice : basePrice.doubleSharing;
  const baseDisplayPrice = Math.max(...Object.values(basePrice));

  return (
    <>
      <p className="text-base text-gray-700 mb-1 font-medium">
        {totalPrice > 0 ? "Total Price" : "Price From"}
      </p>
      <h2 className="text-heading mb-1">
        Rs. {displayPrice.toLocaleString("en-IN")}/-
      </h2>
      <p className="line-through text-gray-700 text-[22px] font-bold mb-4">
        {baseDisplayPrice.toLocaleString("en-IN")} INR/-
      </p>
    </>
  );
};

export default PriceDisplay;
