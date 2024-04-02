import { baseApi } from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    makeTransaction: builder.mutation({
      query: (transactionData) => ({
        url: "/api/make-transaction",
        method: "POST",
        body: transactionData,
      }),
      invalidatesTags: ["balance"],
    }),
    getTransactionsHistory: builder.query({
      query: (username) => ({
        url: `/api/get-transactions/${username}`,
        method: "GET",
      }),
      providesTags: ["balance"],
    }),
  }),
});

export const { useMakeTransactionMutation, useGetTransactionsHistoryQuery } =
  userApi;
