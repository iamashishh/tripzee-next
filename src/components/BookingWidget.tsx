"use client";
import React from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setSelectedDate, resetBooking } from "../store/bookingSlice";
import TravellerCounter from "./TravellerCounter";

const BookingWidget: React.FC = () => {
  const dispatch = useAppDispatch();
  const { selectedDate, travellerCounts, totalPrice, basePrice } =
    useAppSelector((state) => state.booking);

  const handleDateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSelectedDate(event.target.value));
  };

  const handleBookNow = () => {
    const totalTravellers = Object.values(travellerCounts).reduce(
      (sum, count) => sum + count,
      0
    );

    if (totalTravellers === 0) {
      alert("Please select at least one traveller");
      return;
    }

    if (!selectedDate) {
      alert("Please select a date");
      return;
    }

    // Here you would typically handle the booking process
    console.log("Booking Details:", {
      selectedDate,
      travellerCounts,
      totalPrice,
      totalTravellers,
    });

    alert(
      `Booking confirmed for ${totalTravellers} travellers on ${selectedDate}. Total: ₹${totalPrice.toLocaleString(
        "en-IN"
      )}`
    );
  };

  const handleReset = () => {
    dispatch(resetBooking());
  };

  const totalTravellers = Object.values(travellerCounts).reduce(
    (sum, count) => sum + count,
    0
  );

  return (
    <div className="bg-white border rounded-xl shadow-md p-6">
      <h3 className="text-xl text-center font-semibold mb-4 text-black">
        Book This Tour
      </h3>

      <select
        className="w-full text-base border border-gray-300 rounded-md px-3 py-2 text-gray-700 mb-5 focus:ring-2 focus:ring-[#FFCC00]"
        value={selectedDate}
        onChange={handleDateChange}
      >
        <option value="">Select Date</option>
        <option value="2024-01-15">January 15, 2024</option>
        <option value="2024-01-20">January 20, 2024</option>
        <option value="2024-02-01">February 1, 2024</option>
        <option value="2024-02-15">February 15, 2024</option>
        <option value="2024-03-01">March 1, 2024</option>
      </select>

      <div>
        <h4 className="text-base font-semibold text-gray-800 mb-3">
          Travellers Count
        </h4>

        <TravellerCounter
          type="doubleSharing"
          label="Double Sharing"
          price={basePrice.doubleSharing}
        />
        <TravellerCounter
          type="tripleSharing"
          label="Triple Sharing"
          price={basePrice.tripleSharing}
        />
        <TravellerCounter
          type="quadSharing"
          label="Quad Sharing"
          price={basePrice.quadSharing}
        />
      </div>

      {/* Total Section */}
      {totalTravellers > 0 && (
        <div className="mt-4 p-3 bg-gray-50 rounded-lg border">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-800">
              Total Travellers:
            </span>
            <span className="font-bold text-black">{totalTravellers}</span>
          </div>
          <div className="flex justify-between items-center mt-1">
            <span className="font-semibold text-gray-800">Total Price:</span>
            <span className="font-bold text-lg text-[#FFCC00]">
              ₹{totalPrice.toLocaleString("en-IN")}
            </span>
          </div>
        </div>
      )}

      <div className="flex gap-2 mt-6">
        <button
          onClick={handleBookNow}
          className="flex-1 text-base bg-secondary text-black font-semibold py-3 rounded-full transition-all "
          disabled={totalTravellers === 0 || !selectedDate}
        >
          Book Now
        </button>
        {totalTravellers > 0 && (
          <button
            onClick={handleReset}
            className="px-4 text-sm bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-3 rounded-full transition-all"
          >
            Reset
          </button>
        )}
      </div>

      <p className="text-xs text-gray-600 mt-4 leading-relaxed">
        <span className="font-bold text-[12px] text-black">Note:</span> Lorem
        ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua
      </p>
    </div>
  );
};

export default BookingWidget;
