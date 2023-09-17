import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  image: null
};

export const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    setSectionImage: (state, action) => {
      state.image = action.payload;
    },
    
  },
});

export const { setSectionImage } = imageSlice.actions;
