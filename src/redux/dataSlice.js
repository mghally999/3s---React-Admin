import { createSlice } from "@reduxjs/toolkit";
import { mockData } from "../data/mockData";

const initialState = {
  data: mockData || [],
  language: localStorage.getItem("language") || "en",
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
    addUser: (state, action) => {
      state.data.unshift({ ...action.payload, id: Date.now() });
    },
  },
});

export const { setData, deleteRow, setLanguage, addUser } = dataSlice.actions;
export default dataSlice.reducer;
