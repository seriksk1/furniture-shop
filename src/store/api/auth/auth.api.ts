import { baseApi, httpMethods } from "../base.api"

const AUTH_URL = "/auth"

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: `${AUTH_URL}/login`,
        method: httpMethods.POST,
        body: credentials,
      }),
    }),
    registration: builder.mutation<RegisterResponse, RegisterRequest>({
      query: (credentials) => ({
        url: `${AUTH_URL}/registration`,
        method: httpMethods.POST,
        body: credentials,
      }),
    }),
    changePassword: builder.mutation<ChangePasswordResponse, ChangePasswordRequest>({
      query: (credentials) => ({
        url: `${AUTH_URL}/change-password`,
        method: httpMethods.POST,
        body: credentials,
      }),
    }),
    forgotPassword: builder.mutation<ForgotPasswordResponse, ForgotPasswordRequest>({
      query: (credentials) => ({
        url: `${AUTH_URL}/forgot-password`,
        method: httpMethods.POST,
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
