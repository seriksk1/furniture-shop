export * from "./ProtectedRoute"

import React from "react"
import { Route, Routes } from "react-router"
import { ProtectedRoute } from "./ProtectedRoute"
import { Cart, NoMatch, Home, Login, Product, Register } from "../pages"
import { appPaths } from "../constants"

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={appPaths.home} element={<Home />} />
      <Route path={appPaths.login} element={<Login />} />
      <Route path={appPaths.register} element={<Register />} />
      <Route path={appPaths.product} element={<Product />} />

      <Route element={<ProtectedRoute />}>
        <Route path={appPaths.cart} element={<Cart />} />
      </Route>

      <Route path="*" element={<NoMatch />} />
    </Routes>
  )
}
