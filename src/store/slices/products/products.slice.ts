import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../store"

const initialState = {}

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
})

export const {} = productsSlice.actions

export const productsReducer = productsSlice.reducer

export const selectProducts = (state: RootState) => state.products
