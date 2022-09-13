import classNames from "classnames"
import React from "react"

interface InputFIeldProps extends React.HTMLProps<HTMLInputElement> {
  error?: boolean
  helperText?: string
}

export const InputField: React.FC<InputFIeldProps> = ({
  className,
  placeholder = "Input text...",
  value,
  helperText = "An error was acquired",
  required = false,
  error,
  onChange,
}) => {
  return (
    <div>
      <input
        className={className}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
      />
      {error && <div>{helperText}</div>}
    </div>
  )
}
