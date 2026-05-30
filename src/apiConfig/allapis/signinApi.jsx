// src/apiConfig/dataApi.js
import { apiSlice } from "../config";

// Inject endpoints into the existing API slice
export const dataApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Mutation for user login
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: "/users/login/",
        method: "POST",
        data: credentials, // Axios expects `data`
      }),
    }),
  }),
});

// Export the auto-generated hook
export const { useLoginUserMutation } = dataApi;
