import { createSlice } from "@reduxjs/toolkit";
import { mockData } from "../data/mockData";

const initialState = {
  data: mockData || [],
  language: localStorage.getItem("language") || "en", // 🔹 Persist language
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload || [];
    },
    deleteRow: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload);
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
      localStorage.setItem("language", action.payload);
    },
  },
});

export const { setData, deleteRow, setLanguage } = dataSlice.actions;
export default dataSlice.reducer;
