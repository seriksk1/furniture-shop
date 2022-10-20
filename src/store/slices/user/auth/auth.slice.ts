import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../../store"

const initialState: AuthState = {
  user: null,
  token: null,
}

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registration: (state, { payload }: PayloadAction<RegisterResponse>) => {
      state.token = payload.token
    },
    login: (state, { payload }: PayloadAction<LoginResponse>) => {
      state.token = payload.token
    },
    logout: (state) => {
      state.token = null
      state.user = null
    },
  },
})

export const { login, registration, logout } = slice.actions
export const selectAuth = (state: RootState) => state.user.auth
export const authReducer = slice.reducer
