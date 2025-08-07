import baseApi from "../api/baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    userProfile: builder.query({
      query: () => ({
        url: "api/auth/update-profile/",
        method: "GET",
      }),

      providesTags: ["User"],
    }),
    allUser: builder.query({
      query: () => ({
        url: "api/auth/dashboard/",
        method: "GET",
      }),
      providesTags: ["User"],
    }),

    dashboard: builder.query({
      query: () => ({
        url: "api/auth/dashboard/",
        method: "GET",
      }),
      providesTags: ["User"],
    }),

    // updateProfile fromdata
    updateProfile: builder.mutation({
      query: (body) => ({
        url: "api/auth/update-profile/",
        method: "PUT",
        body,
      }),
      invalidatesTags: ["User"],
    }),

  }),
});

export const { useUserProfileQuery , useAllUserQuery, useDashboardQuery , useUpdateProfileMutation} = userApi;