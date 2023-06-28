import React from "react"
import classNames from "classnames"
import styles from "./IconButton.module.pcss"

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const IconButton: React.FC<IconButtonProps> = ({ className, children, ...props }) => {
  const classes = classNames(styles.button, className)

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
