import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../../store"

const initialState = {}

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    createOrder: (state, action) => {},
    updateOrder: (state, action) => {},
    deleteOrder: (state, action) => {},
    setOrders: (state, action) => {},
  },
})

export const { createOrder, updateOrder, deleteOrder } = ordersSlice.actions

export const ordersReducer = ordersSlice.reducer

export const selectOrders = (state: RootState) => state.admin.orders
