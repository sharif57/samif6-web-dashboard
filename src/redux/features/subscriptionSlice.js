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


  }),
});

export const { useAllSubscriptionQuery} = subscriptionApi;