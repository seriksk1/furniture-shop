import React from "react"
import classNames from "classnames"
import styles from "./Checkbox.module.pcss"
import { CheckIcon } from "../../../assets/icons"
import { Typography } from "../Typography/Typography"

interface CheckboxProps extends React.PropsWithChildren {
  className?: string
  checked: boolean
  onToggle: () => void
}

export const Checkbox: React.FC<CheckboxProps> = ({ className, children, checked, onToggle }) => {
  const classes = classNames(styles.container, className)
  const checkboxClasses = classNames(styles.checkbox, {
    [styles.checked]: checked,
  })

  return (
    <div className={classes} onClick={onToggle}>
      <div className={checkboxClasses}>{checked && <CheckIcon className={styles.icon} />}</div>
      <Typography className={styles.text}>{children}</Typography>
    </div>
  )
}
