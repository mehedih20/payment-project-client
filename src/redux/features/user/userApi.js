import { baseApi } from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (loginData) => ({
        url: "/api/login",
        method: "POST",
        body: loginData,
      }),
    }),
    register: builder.mutation({
      query: (registerData) => ({
        url: "/api/register",
        method: "POST",
        body: registerData,
      }),
    }),
    getBalance: builder.query({
      query: (email) => ({
        url: `/api/get-balance/${email}`,
        method: "GET",
      }),
      providesTags: ["balance"],
    }),
    // getAllUser: builder.query({
    //   query: () => ({
    //     url: "/users",
    //     method: "GET",
    //   }),
    //   providesTags: ["users"],
    // }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useGetBalanceQuery } =
  userApi;
