import React from "react"
import { AdminTabType } from "./enums"
import { CategoriesPanel, MainPanel, OrdersPanel, ProductsPanel, RolesPanel } from "./panels"
import adminIcon from "../../assets/icons/admin/sidebar/admin.png"
import rolesIcon from "../../assets/icons/admin/sidebar/roles.png"
import categoriesIcon from "../../assets/icons/admin/sidebar/categories.png"
import productsIcon from "../../assets/icons/admin/sidebar/products.png"
import ordersIcon from "../../assets/icons/admin/sidebar/orders.png"

export const adminPanels = [
  {
    text: "Admin Panel",
    type: AdminTabType.main,
    content: <MainPanel />,
    icon: <img src={adminIcon} alt="icon" />,
  },
  {
    text: "Manage Roles",
    type: AdminTabType.roles,
    content: <RolesPanel />,
    icon: <img src={rolesIcon} alt="icon" />,
  },
  {
    text: "Manage Categories",
    type: AdminTabType.categories,
    content: <CategoriesPanel />,
    icon: <img src={categoriesIcon} alt="icon" />,
  },
  {
    text: "Manage Products",
    type: AdminTabType.products,
    content: <ProductsPanel />,
    icon: <img src={productsIcon} alt="icon" />,
  },
  {
    text: "Manage Orders",
    type: AdminTabType.orders,
    content: <OrdersPanel />,
    icon: <img src={ordersIcon} alt="icon" />,
  },
]
