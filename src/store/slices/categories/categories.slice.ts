import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../store"

const initialState = {}

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
})

export const {} = categoriesSlice.actions

export const categoriesReducer = categoriesSlice.reducer

export const selectCategories = (state: RootState) => state.categories
