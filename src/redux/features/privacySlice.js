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

    updateTerms: builder.mutation({
      query: (body) => ({
        url: "api/dicipline/terms-conditions/",
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Privacy"],
    }),

    // api/dicipline/trust-safety/
    safety: builder.query({
      query: () => ({
        url: "api/dicipline/trust-safety/",
        method: "GET",
      }),
      providesTags: ["Privacy"],
    }),

    updateSafety: builder.mutation({
      query: (body) => ({
        url: "api/dicipline/trust-safety/",
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Privacy"],
    }),
   
  }),
});

export const { usePrivacyGetQuery , useUpdatePrivacyMutation, useTermsQuery , useUpdateTermsMutation , useSafetyQuery, useUpdateSafetyMutation } = privacyApi;
