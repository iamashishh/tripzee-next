import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TravellerCount {
  doubleSharing: number;
  tripleSharing: number;
  quadSharing: number;
}

export interface BookingState {
  selectedDate: string;
  travellerCounts: TravellerCount;
  totalPrice: number;
  basePrice: {
    doubleSharing: number;
    tripleSharing: number;
    quadSharing: number;
  };
}

const initialState: BookingState = {
  selectedDate: "",
  travellerCounts: {
    doubleSharing: 0,
    tripleSharing: 0,
    quadSharing: 0,
  },
  totalPrice: 0,
  basePrice: {
    doubleSharing: 89999,
    tripleSharing: 79999,
    quadSharing: 69999,
  },
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    incrementTraveller: (
      state,
      action: PayloadAction<keyof TravellerCount>
    ) => {
      const type = action.payload;
      state.travellerCounts[type] += 1;
      state.totalPrice = calculateTotalPrice(state);
    },
    decrementTraveller: (
      state,
      action: PayloadAction<keyof TravellerCount>
    ) => {
      const type = action.payload;
      if (state.travellerCounts[type] > 0) {
        state.travellerCounts[type] -= 1;
        state.totalPrice = calculateTotalPrice(state);
      }
    },
    setSelectedDate: (state, action: PayloadAction<string>) => {
      state.selectedDate = action.payload;
    },
    resetBooking: (state) => {
      state.selectedDate = "";
      state.travellerCounts = {
        doubleSharing: 0,
        tripleSharing: 0,
        quadSharing: 0,
      };
      state.totalPrice = 0;
    },
  },
});

// Helper function to calculate total price
const calculateTotalPrice = (state: BookingState): number => {
  const { travellerCounts, basePrice } = state;
  return (
    travellerCounts.doubleSharing * basePrice.doubleSharing +
    travellerCounts.tripleSharing * basePrice.tripleSharing +
    travellerCounts.quadSharing * basePrice.quadSharing
  );
};

export const {
  incrementTraveller,
  decrementTraveller,
  setSelectedDate,
  resetBooking,
} = bookingSlice.actions;

export default bookingSlice.reducer;
