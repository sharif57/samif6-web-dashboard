import baseApi from "../api/baseApi";

const AuthenticationAPI = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: "api/auth/login/",
        method: "POST",
        body,
      }),
    }),

    verifyOtp: builder.mutation({
      query: (body) => ({
        url: "api/auth/verify-email/",
        method: "POST",
        body,
      }),
    }),

    sendOtp: builder.mutation({
      query: (body) => ({
        url: "/auth/send-otp",
        method: "POST",
        body,
      }),
    }),

    resendOtp: builder.mutation({
      query: (body) => ({
        url: "api/auth/resend-otp/",
        method: "POST",
        body,
      }),
    }),

    forgotPassword: builder.mutation({
      query: (body) => ({
        url: "api/auth/forget-password/",
        method: "POST",
        body,
      }),
    }),

    resetPassword: builder.mutation({
      query: (body) => ({
        url: "api/auth/reset-password/",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        method: "POST",
        body,
      }),
    }),

    verifyForgetPasswordOtp: builder.mutation({
      query: (body) => ({
        url: "api/auth/verify/pass/otp/",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useVerifyOtpMutation,
  useSendOtpMutation,
  useResendOtpMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useVerifyForgetPasswordOtpMutation,
} = AuthenticationAPI;
export default AuthenticationAPI;
