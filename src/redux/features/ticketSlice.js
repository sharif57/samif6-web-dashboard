
import baseApi from "../api/baseApi";

export const ticketsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allTickets: builder.query({
      query: () => ({
        url: "api/ticket/tickets/",
        method: "GET",
      }),
      providesTags: ["Tickets"],
    }),
   
  }),
});

export const { useAllTicketsQuery } = ticketsApi;
