import React from "react"

interface CheckboxProps {
  text?: string
  checked: boolean
}

export const Checkbox: React.FC<CheckboxProps> = ({ text, checked }) => {
  return <div>Checkbox</div>
}
