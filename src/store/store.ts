import { configureStore } from "@reduxjs/toolkit"
import { userReducer, authReducer, productsReducer, userApi, authApi, productsApi } from "./slices"

export const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    products: productsReducer,
    [userApi.reducerPath]: userApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
