import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:4000",
  // prepareHeaders: (headers, { getState }) => {
  //   const { userToken: token } = getState().user;

  //   if (token) {
  //     headers.set("authorization", token);
  //   }

  //   return headers;
  // },
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery,
  tagTypes: ["users"],
  endpoints: () => ({}),
});
