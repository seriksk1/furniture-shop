import { combineReducers } from "redux"
import { baseApi } from "./api/base.api"
import {
  authReducer,
  productsReducer,
  categoriesReducer,
  ordersReducer,
  rolesReducer,
  publicProductsReducer,
  profileReducer,
  publicCategoriesReducer,
  cartReducer,
} from "./slices"

export const rootReducer = combineReducers({
  user: combineReducers({
    auth: authReducer,
    profile: profileReducer,
    cart: cartReducer,
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
  [baseApi.reducerPath]: baseApi.reducer,
})
