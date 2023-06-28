import React from "react"
import styles from "./ButtonGroup.module.pcss"
import classNames from "classnames"
import { ButtonProps } from "../Button/Button"

interface ButtonGroupProps {
  className?: string
  children: React.ReactElement<ButtonProps> | React.ReactElement<ButtonProps>[]
  fullWidth?: boolean
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({ children, className, fullWidth }) => {
  const classes = classNames(
    styles.group,
    {
      [styles.fullWidth]: fullWidth,
    },
    className
  )

  return <div className={classes}>{children}</div>
}
