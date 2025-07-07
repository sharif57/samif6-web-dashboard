
import baseApi from "../api/baseApi";

export const ticketsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allTicketsPurchases: builder.query({
      query: () => ({
        url: "api/ticket/tickets/my-purchases/",
        method: "GET",
      }),
      providesTags: ["Tickets"],
    }),
   
  }),
});

export const { useAllTicketsPurchasesQuery } = ticketsApi;
