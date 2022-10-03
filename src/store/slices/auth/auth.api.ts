import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { prepareHeadersWithToken } from "../../../utils"

export const authApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.API_URI}/auth`,
    prepareHeaders: prepareHeadersWithToken,
  }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: "login",
        method: "POST",
        body: credentials,
      }),
    }),
    registration: builder.mutation<RegisterResponse, RegisterRequest>({
      query: (credentials) => ({
        url: "registration",
        method: "POST",
        body: credentials,
      }),
    }),
    changePassword: builder.mutation<ChangePasswordResponse, ChangePasswordRequest>({
      query: (credentials) => ({
        url: "change-password",
        method: "POST",
        body: credentials,
      }),
    }),
    forgotPassword: builder.mutation<ForgotPasswordResponse, ForgotPasswordRequest>({
      query: (credentials) => ({
        url: "forgot-password",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
})

export const {
  useLoginMutation,
  useRegistrationMutation,
  useChangePasswordMutation,
  useForgotPasswordMutation,
} = authApi
