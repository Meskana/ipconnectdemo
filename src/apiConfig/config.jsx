import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "./axiosBaseQuery";
import axiosInstance from "./axiosInstance";

/**
 * Axios instance supports:
 *  - Access token header injection
 *  - Auto-refresh of expired tokens
 *  - Redirect on failed refresh
 */
export const apiSlice = createApi({
  reducerPath: "api", // store key for reducer
  baseQuery: axiosBaseQuery(axiosInstance), // use custom axios base query
  endpoints: () => ({}), // endpoints will be injected dynamically
});
