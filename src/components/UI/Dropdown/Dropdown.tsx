import React from "react"
import classNames from "classnames"
import { ArrowDropdown } from "../../../assets/icons/ArrowDropdown"
import styles from "./Dropdown.module.pcss"

interface DropdownProps {
  className?: string
  list: string[]
}

export const Dropdown: React.FC<DropdownProps> = ({ className, list }) => {
  const [open, setOpen] = React.useState(false)
  const [currentItem, setCurrentItem] = React.useState(list[0] || "")

  const classes = classNames(styles.container, className)

  const onMouseEnter = () => {
    if (!open) {
      setOpen(true)
    }
  }

  const onMouseLeave = () => {
    setOpen(false)
  }

  const onCurrentItemChange = (item: string) => {
    setCurrentItem(item)
  }

  const renderItem = (item: string) => {
    const handleChange = () => {
      onCurrentItemChange(item)
    }

    return (
      <div key={item} className={styles.item} onClick={handleChange}>
        {item}
      </div>
    )
  }

  return (
    <div className={classes} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className={styles.current}>
        <span>{currentItem}</span>
        <ArrowDropdown className={styles.arrow} />
      </div>
      {open && <div className={styles.list}>{list.map((item, i) => renderItem(item))}</div>}
    </div>
  )
}
