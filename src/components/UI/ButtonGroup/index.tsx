import classNames from "classnames"
import React from "react"
import { ButtonProps } from "../Button"
import styles from "./ButtonGroup.module.pcss"

interface ButtonGroupProps {
  children: React.ReactElement<ButtonProps> | React.ReactElement<ButtonProps>[]
  fullWidth?: boolean
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({ children, fullWidth }) => {
  const classes = classNames(styles.group, {
    [styles.fullWidth]: fullWidth,
  })

  return <div className={classes}>{children}</div>
}
