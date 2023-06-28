import React from "react"
import classNames from "classnames"
import styles from "./Counter.module.pcss"
import { MinusIcon, PlusIcon } from "../../../assets/icons"
import { Button, ButtonColors, ButtonTypes } from "../Button/Button"

interface CounterProps {
  className?: string
  value: number
  setValue: React.Dispatch<React.SetStateAction<number>>
}

export const Counter: React.FC<CounterProps> = ({ className, value, setValue }) => {
  const classes = classNames(styles.container, className)

  const onMinusClick = () => {
    if (value !== 1) {
      setValue((prev) => prev - 1)
    }
  }

  const onPlusClick = () => {
    if (value !== 100) {
      setValue((prev) => prev + 1)
    }
  }

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = Number(e.target.value)
    const result = inputValue <= 100 ? (inputValue < 1 ? 1 : inputValue) : 100
    setValue(result)
  }

  return (
    <div className={classes}>
      <Button
        className={styles.button}
        color={ButtonColors.transparent}
        type={ButtonTypes.outlined}
        disabled={value === 1}
        onClick={onMinusClick}
      >
        <MinusIcon />
      </Button>
      <input type="number" className={styles.input} value={value} onChange={onInputChange} />
      <Button
        className={styles.button}
        color={ButtonColors.transparent}
        type={ButtonTypes.outlined}
        disabled={value === 100}
        onClick={onPlusClick}
      >
        <PlusIcon />
      </Button>
    </div>
  )
}
