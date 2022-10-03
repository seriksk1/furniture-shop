import thunk from "redux-thunk"
import { configureStore } from "@reduxjs/toolkit"
import {
  userReducer,
  authReducer,
  productsReducer,
  userApi,
  authApi,
  productsApi,
  categoriesApi,
  categoriesReducer,
  ordersReducer,
  ordersApi,
  rolesReducer,
  rolesApi,
} from "./slices"

import storage from "redux-persist/lib/storage"
import { combineReducers } from "redux"
import { persistReducer } from "redux-persist"

const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
  products: productsReducer,
  categories: categoriesReducer,
  orders: ordersReducer,
  roles: rolesReducer,
  [userApi.reducerPath]: userApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [productsApi.reducerPath]: productsApi.reducer,
  [categoriesApi.reducerPath]: categoriesApi.reducer,
  [ordersApi.reducerPath]: ordersApi.reducer,
  [rolesApi.reducerPath]: rolesApi.reducer,
})

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
})

export type RootState = ReturnType<typeof store.getState>
