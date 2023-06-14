import { configureStore } from "@reduxjs/toolkit";
import { configurationSlice } from "./slices/configurationSlice";

export const store = configureStore({
  reducer: {
    configuration: configurationSlice.reducer,
  },
});
