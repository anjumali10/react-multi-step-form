// src/redux/slice.js

import { createSlice } from "@reduxjs/toolkit";

// Initial state for the slice
const initialState = {
  billingType: "monthly",
  billingPlan: "arcade",
  selectedAddOns: {
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
  },
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setBillingType: (state, action) => {
      state.billingType = action.payload;
    },
    setBillingPlan: (state, action) => {
      state.billingPlan = action.payload;
    },
    setSelectedAddOns: (state, action) => {
      state.selectedAddOns = action.payload;
    },
  },
});

export const { setBillingType, setBillingPlan, setSelectedAddOns } = formSlice.actions;

export default formSlice.reducer;
