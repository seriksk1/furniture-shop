import React from "react"
import classNames from "classnames"
import styles from "./Button.module.pcss"
import { ButtonColors, ButtonSizes, ButtonTypes } from "./enums"

export * from "./enums"

export interface ButtonProps extends React.PropsWithChildren {
  size?: ButtonSizes
  type?: ButtonTypes
  color?: ButtonColors
  submit?: boolean
  fullWidth?: boolean
  disabled?: boolean
  className?: string
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({
  size = ButtonSizes.small,
  type = ButtonTypes.filled,
  color = ButtonColors.dark,
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
    styles[color],
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
