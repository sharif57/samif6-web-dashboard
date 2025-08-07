import baseApi from "../api/baseApi";

export const privacyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
   
    privacyGet: builder.query({
      query: () => ({
        url: "api/dicipline/privacy-policy/",
        method: "GET",
      }),
      providesTags: ["Privacy"],
    }),
    
    updatePrivacy: builder.mutation({
      query: (body) => ({
        url: "api/dicipline/privacy-policy/",
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Privacy"],
    }),

    terms: builder.query({
      query: () => ({
        url: "api/dicipline/terms-conditions/",
        method: "GET",
      }),
      providesTags: ["Privacy"],
    }),
   
  }),
});

export const { usePrivacyGetQuery , useUpdatePrivacyMutation, useTermsQuery} = privacyApi;
