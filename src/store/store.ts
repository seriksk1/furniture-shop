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
} from "./slices"

export const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    products: productsReducer,
    categories: categoriesReducer,
    [userApi.reducerPath]: userApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
