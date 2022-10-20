import React from "react"
import { Route, Routes } from "react-router"
import { Cart, NoMatch, Home, Auth, Product, Profile, Admin } from "../pages"
import { ProtectedRoute } from "./ProtectedRoute/ProtectedRoute"
import { appPaths } from "../constants"
import { DefaultLayout } from "../layouts"

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={appPaths.auth} element={<Auth />} />

      <Route element={<DefaultLayout />}>
        <Route path={appPaths.home} element={<Home />} />
        <Route path={appPaths.product} element={<Product />} />
        <Route element={<ProtectedRoute />}>
          <Route path={appPaths.cart} element={<Cart />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path={appPaths.profile} element={<Profile />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path={appPaths.admin} element={<Admin />} />
        </Route>
      </Route>

      <Route path="*" element={<NoMatch />} />
    </Routes>
  )
}
