import React from "react"
import styles from "./Admin.module.pcss"
import { Typography, TypographySizes } from "../../components"
import { AdminSidebar } from "./AdminSidebar/AdminSidebar"
import { AdminTabType } from "./enums"
import {
  CategoriesPanel,
  MainPanel,
  OrdersPanel,
  ProductsPanel,
  RolesPanel,
  SubscriptionsPanel,
} from "./panels"

const panels = [
  { text: "Admin Panel", type: AdminTabType.main, content: <MainPanel /> },
  { text: "Manage Categories", type: AdminTabType.categories, content: <CategoriesPanel /> },
  { text: "Manage Products", type: AdminTabType.products, content: <ProductsPanel /> },
  {
    text: "Manage Subscriptions",
    type: AdminTabType.subscriptions,
    content: <SubscriptionsPanel />,
  },
  { text: "Manage Orders", type: AdminTabType.orders, content: <OrdersPanel /> },
  { text: "Manage Roles", type: AdminTabType.roles, content: <RolesPanel /> },
]

export const Admin: React.FC = () => {
  const [currentPanel, setCurrentPanel] = React.useState(panels[0])

  const onPanelChange = (i: number) => {
    setCurrentPanel(panels[i])
  }

  return (
    <div className={styles.container}>
      <AdminSidebar list={panels} onPanelChange={onPanelChange} />

      <div className={styles.content}>
        <Typography className={styles.title} size={TypographySizes.extraLarge}>
          {currentPanel.text}
        </Typography>
        <div className={styles.panel}>{currentPanel.content}</div>
      </div>
    </div>
  )
}
