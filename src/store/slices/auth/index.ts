import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../.."

const initialState: IAuthState = {
  user: null,
  token: "token", //temporary active
}

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
})

export const {} = slice.actions

export const selectAuth = (state: RootState) => state.auth

export const authReducer = slice.reducer