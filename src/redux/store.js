// src/redux/store.js

import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./slice"; // Import the reducer from the slice

// Configure the Redux store
const store = configureStore({
  reducer: {
    form: formReducer, // Add your slice reducer here
  },
});

export default store;
