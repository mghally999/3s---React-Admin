import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataSlice";

export const store = configureStore({
  reducer: {
    data: dataReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
