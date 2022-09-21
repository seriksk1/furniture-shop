import React from "react"

export const useToggle = (initialState?: boolean) => {
  const [active, setActive] = React.useState(Boolean(initialState))

  const onToggle = () => {
    setActive((prevState) => !prevState)
  }

  const activate = () => {
    setActive(true)
  }

  const deactivate = () => {
    setActive(false)
  }

  return { active, onToggle, activate, deactivate }
}
