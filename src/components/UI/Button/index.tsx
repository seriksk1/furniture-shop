import React from "react"

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = ({ children, className, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
}
