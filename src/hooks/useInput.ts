import React from "react"

export function useInput(initialValue: string | null) {
  const [value, setValue] = React.useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const clear = () => {
    setValue("")
  }

  return { value, onChange, clear }
}
