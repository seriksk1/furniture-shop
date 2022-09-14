import React from "react"
import { Route, Routes } from "react-router"
import { Cart, NoMatch, Home, Auth, Product } from "../pages"
import { ProtectedRoute } from "./ProtectedRoute"
import { appPaths } from "../constants"

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={appPaths.home} element={<Home />} />
      <Route path={appPaths.auth} element={<Auth />} />
      <Route path={appPaths.product} element={<Product />} />

      <Route element={<ProtectedRoute />}>
        <Route path={appPaths.cart} element={<Cart />} />
      </Route>

      <Route path="*" element={<NoMatch />} />
    </Routes>
  )
}
