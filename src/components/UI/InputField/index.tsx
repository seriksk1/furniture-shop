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
  const defaultClasses =
    "w-full h-[60px] flex items-center text-[14px] leading-[21px] text-black px-[28px] py-[20px] mt-[25px] rounded border-[1px] border-gray placeholder:text-gray"
  const classes = classNames(defaultClasses, className)

  return (
    <div>
      <input
        className={classes}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
      />
      {error && <div className="text-red">{helperText}</div>}
    </div>
  )
}
