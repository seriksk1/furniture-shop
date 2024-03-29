import React from "react"
import classNames from "classnames"
import { UseFormRegisterReturn } from "react-hook-form"
import styles from "./InputField.module.pcss"
import { Typography, TypographyColors, TypographySizes } from "../Typography/Typography"

interface InputFIeldProps {
  className?: string
  type?: React.HTMLInputTypeAttribute
  size?: "small" | "medium" | "large"
  placeholder?: string
  register: UseFormRegisterReturn
  error?: string
}

export const InputField: React.FC<InputFIeldProps> = ({
  className,
  type = "text",
  size = "large",
  placeholder,
  register,
  error,
}) => {
  const classes = classNames(styles.input, styles[size])

  return (
    <div className={className}>
      <input className={classes} type={type} placeholder={placeholder} {...register} />
      {error && (
        <Typography
          className={styles.error}
          size={TypographySizes.extraSmall}
          color={TypographyColors.red}
        >
          {error}
        </Typography>
      )}
    </div>
  )
}
