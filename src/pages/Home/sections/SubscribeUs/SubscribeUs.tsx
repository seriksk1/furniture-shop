import React from "react"
import classNames from "classnames"
import styles from "./SubscribeUs.module.pcss"
import { Button } from "../../../../components"
import { useInput } from "../../../../hooks"

interface SubscribeUsProps {
  className?: string
}

export const SubscribeUs: React.FC<SubscribeUsProps> = ({ className }) => {
  const classes = classNames(styles.container, className)
  const { value, onChange } = useInput("fomenko.alina@gmail.com")

  return (
    <div className={classes}>
      <div className={styles.info}>
        <div className={styles.title}>Get in Touch</div>
        <div className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        </div>
      </div>
      <div className={styles.form}>
        <div className={styles.wrap}>
          <div className={styles.label}>EMAIL ADDRESS</div>
          <input className={styles.input} value={value || ""} onChange={onChange} />
        </div>
        <Button className={styles.button} size="small">
          Subscribe Us
        </Button>
      </div>
    </div>
  )
}
