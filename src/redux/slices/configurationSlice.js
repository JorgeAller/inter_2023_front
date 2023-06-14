import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: localStorage.getItem("selectedLang") || navigator.language,
};

export const configurationSlice = createSlice({
  name: "configuration",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
      localStorage.setItem("selectedLang", action.payload);
    },
  },
});

export const { setLanguage } = configurationSlice.actions;
