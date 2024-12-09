import { configureStore } from "@reduxjs/toolkit";
import MainSlice from "./features/MainSlice";

export const store = configureStore({
  reducer: {
    main: MainSlice,
  },
});

// Tipi derivati per TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
