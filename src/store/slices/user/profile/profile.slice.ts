import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../../store"

const initialState: IUserState = {}

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
})

export const {} = profileSlice.actions

export const selectProfile = (state: RootState) => state.user.profile

export const profileReducer = profileSlice.reducer
