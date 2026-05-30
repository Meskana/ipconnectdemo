import { apiSlice } from "../config"; // your existing slice

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (userData) => ({
        url: "/users/register/",
        method: "POST",
        data: userData, // Axios requires `data`, not `body`
      }),
    }),
  }),
});

export const { useRegisterUserMutation } = authApi;
