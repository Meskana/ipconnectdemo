// store.jsx
import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./src/apiConfig/config"; // ✅ Correct the path if needed

/**
 * Redux store configuration
 * - Adds RTK Query's API reducer
 * - Enables RTK Query middleware for caching & auto re-fetching
 */
export const store = configureStore({
  reducer: {
    // RTK Query auto-generated reducer
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
