import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../store"

const initialState: IUserState = {}

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {},
})

export const {} = slice.actions

export const selectUser = (state: RootState) => state.user

export const userReducer = slice.reducer
