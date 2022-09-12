import React from "react"
import classNames from "classnames"

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  fullWidth?: boolean
  asText?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  fullWidth,
  asText,
  color = "text-white",
  onClick,
}) => {
  const defaultClasses = `flex items-center h-[60px] min-w-[80px] rounded font-500 text-[16px] leading-[24px] ${color}`
  const classes = classNames(defaultClasses, className, {
    "w-full": Boolean(fullWidth),
    "bg-black justify-center": Boolean(!asText),
    "w-full h-[unset] justify-end bg-transparent font-400 text-[14px] leading-[21px]":
      Boolean(asText),
  })

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  )
}
