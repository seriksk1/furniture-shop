import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../../store"

const initialState = {}

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setPublicProducts: (state, action) => {},
  },
})

export const { setPublicProducts } = productsSlice.actions

export const publicProductsReducer = productsSlice.reducer

export const selectPublicProducts = (state: RootState) => state.public.products
