import { configureStore } from "@reduxjs/toolkit";
import contributors from "./slice/contributors";

export const store = configureStore({
  reducer: {
    contributors,
  },
});
