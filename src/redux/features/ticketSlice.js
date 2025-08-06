
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


    createCreate: builder.mutation({
      query: (body) => ({
        url: "api/ticket/admin/create-ticket/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Tickets"],
    }),

    givewayTicket: builder.query({
      query: () => ({
        url: "api/ticket/available-ticket/",
        method: "GET",
      }),
      providesTags: ["Tickets"],
    }),

    spinTicket: builder.query({
      query: () => ({
        url: "api/raffle/spins-eligible-tickets/",
        method: "GET",
      }),
      providesTags: ["Tickets"],
    }),

    spinDraw: builder.mutation({
      query: (body) => ({
        url: "api/raffle/admin/raffle/draw/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Tickets"],
    }),

    giveWayId: builder.query({
      query: () => ({
        url: "api/ticket/available-ticket/",
        method: "GET",
      }),
      providesTags: ["Tickets"],
    }),

    collectTicket: builder.query({
      query: () => ({
        url: "api/raffle/consolidated-tickets/",
        method: "GET",
      }),
      invalidatesTags: ["Tickets"],
    }),
   
  }),
});

export const { useAllTicketsPurchasesQuery , useCreateCreateMutation, useGivewayTicketQuery, useSpinTicketQuery, useSpinDrawMutation, useGiveWayIdQuery, useCollectTicketQuery} = ticketsApi;
