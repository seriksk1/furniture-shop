import React from "react"
import classNames from "classnames"
import styles from "./AdminSidebar.module.pcss"

interface AdminSidebarProps {
  className?: string
  list: any[]
  activeIndex: number
  onPanelChange: (i: number) => void
}

export const AdminSidebar: React.FC<AdminSidebarProps> = ({
  className,
  list,
  activeIndex,
  onPanelChange,
}) => {
  const classes = classNames(styles.sidebar, className)

  const renderItem = (item: any, i: number) => {
    const itemClasses = classNames(styles.item, {
      [styles.selected]: activeIndex === i,
    })

    const handlePanelChange = () => {
      onPanelChange(i)
    }

    return (
      <div key={i} className={itemClasses} onClick={handlePanelChange}>
        {item.icon}
      </div>
    )
  }

  return (
    <div className={classes}>
      <div className={styles.list}>{list.map(renderItem)}</div>
    </div>
  )
}
