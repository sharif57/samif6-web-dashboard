import baseApi from "../api/baseApi";

export const subscriptionApi  = baseApi.injectEndpoints({
  endpoints: (builder) => ({
  
    allSubscription: builder.query({
      query: () => ({
        url: "api/subscription/plans/",
        method: "GET",
      }),
      providesTags: ["Subscription"],
    }),

    createSubscription: builder.mutation({
      query: (body) => ({
        url: "api/subscription/admin/subscription/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Subscription"],
    }),

    singleSubscription: builder.query({
      query: (id) => ({
        url: `api/subscription/admin/subscription/${id}/`,
        method: "GET",
      }),
      providesTags: ["Subscription"],
    }),


  }),
});

export const { useAllSubscriptionQuery, useCreateSubscriptionMutation, useSingleSubscriptionQuery} = subscriptionApi;