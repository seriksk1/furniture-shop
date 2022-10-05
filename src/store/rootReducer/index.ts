import { combineReducers } from "redux"
import {
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
  publicProductsReducer,
  profileReducer,
  publicCategoriesReducer,
  publicCategoriesApi,
  publicProductsApi,
} from "../slices"

export const rootReducer = combineReducers({
  user: combineReducers({
    auth: authReducer,
    profile: profileReducer,
  }),
  admin: combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    orders: ordersReducer,
    roles: rolesReducer,
  }),
  public: combineReducers({
    products: publicProductsReducer,
    categories: publicCategoriesReducer,
  }),
  [authApi.reducerPath]: authApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [publicProductsApi.reducerPath]: publicProductsApi.reducer,
  [publicCategoriesApi.reducerPath]: publicCategoriesApi.reducer,
  [categoriesApi.reducerPath]: categoriesApi.reducer,
  [productsApi.reducerPath]: productsApi.reducer,
  [ordersApi.reducerPath]: ordersApi.reducer,
  [rolesApi.reducerPath]: rolesApi.reducer,
})
