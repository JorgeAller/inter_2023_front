import { configureStore } from "@reduxjs/toolkit";
import { configurationSlice } from "./slices/configurationSlice";
import { imageSlice } from "./slices/imageSlice";

export const store = configureStore({
  reducer: {
    configuration: configurationSlice.reducer,
    image: imageSlice.reducer,
  },
});
