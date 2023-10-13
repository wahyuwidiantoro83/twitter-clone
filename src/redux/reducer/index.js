import { configureStore } from "@reduxjs/toolkit";
import { accountReducer } from "./accountReducer";

export const globalState = configureStore({
  reducer: {
    accountReducer,
  },
});
