import classNames from "classnames"
import React from "react"
import styles from "./InputField.module.pcss"

interface InputFIeldProps {
  size?: "small" | "medium" | "large"
  error?: boolean
  required?: boolean
  placeholder?: string
  helperText?: string
  className?: string
  value: string | null
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputField: React.FC<InputFIeldProps> = ({
  placeholder = "Input text...",
  helperText = "An error was acquired",
  value,
  size = "large",
  className,
  required,
  error,
  onChange,
}) => {
  const classes = classNames(styles.input, styles[size], className)

  return (
    <div>
      <input
        className={classes}
        placeholder={placeholder}
        required={required}
        value={value || ""}
        onChange={onChange}
      />
      {error ? <div>{helperText}</div> : null}
    </div>
  )
}
