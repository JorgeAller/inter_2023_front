import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: localStorage.getItem("selectedLang") || navigator.language,
  color: localStorage.getItem("selectedColor") || "green"
};

export const configurationSlice = createSlice({
  name: "configuration",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
      localStorage.setItem("selectedLang", action.payload);
    },
    setColor: (state, action) => {
      state.color = action.payload;
      localStorage.setItem("selectedColor", action.payload);
    },
  },
});

export const { setLanguage, setColor} = configurationSlice.actions;
