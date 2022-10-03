import React from "react"
import styles from "./AdminSidebar.module.pcss"
import classNames from "classnames"
import { Typography, TypographyWeights } from "../../../components"

interface AdminSidebarProps {
  className?: string
  onPanelChange: (i: number) => void
  list: any[]
}

export const AdminSidebar: React.FC<AdminSidebarProps> = ({ className, list, onPanelChange }) => {
  const classes = classNames(styles.sidebar, className)

  return (
    <div className={classes}>
      <div className={styles.list}>
        {list.map((item, i) => {
          const handlePanelChange = () => {
            onPanelChange(i)
          }

          return (
            <Typography
              key={item.type}
              className={styles.item}
              weight={TypographyWeights.medium}
              onClick={handlePanelChange}
            >
              {item.text}
            </Typography>
          )
        })}
      </div>
    </div>
  )
}
