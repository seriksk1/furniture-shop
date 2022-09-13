import React from "react"
import classNames from "classnames"
import styles from "./Button.module.pcss"

export interface ButtonProps extends React.PropsWithChildren {
  size?: "small" | "medium" | "large"
  type?: "borderless" | "outlined" | "filled"
  submit?: boolean
  fullWidth?: boolean
  disabled?: boolean
  className?: string
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({
  size = "medium",
  type = "filled",
  submit,
  fullWidth,
  className,
  disabled,
  children,
  onClick,
}) => {
  const classes = classNames(
    styles.button,
    styles[size],
    styles[type],
    {
      [styles.full]: fullWidth,
    },
    className
  )

  return (
    <button
      className={classes}
      type={submit ? "submit" : "button"}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
