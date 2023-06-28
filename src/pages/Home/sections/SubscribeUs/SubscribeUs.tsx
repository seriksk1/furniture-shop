import React from "react"
import classNames from "classnames"
import styles from "./SubscribeUs.module.pcss"
import {
  Button,
  Container,
  Typography,
  TypographyColors,
  TypographySizes,
} from "../../../../components"
import { useInput } from "../../../../hooks"

interface SubscribeUsProps {
  className?: string
}

export const SubscribeUs: React.FC<SubscribeUsProps> = ({ className }) => {
  const classes = classNames(styles.container, className)
  const { value, onChange } = useInput("fomenko.alina@gmail.com")

  return (
    <Container className={classes}>
      <div className={styles.info}>
        <Typography className={styles.title} size={TypographySizes.extraLarge}>
          Get in Touch
        </Typography>
        <Typography
          className={styles.description}
          size={TypographySizes.medium}
          color={TypographyColors.gray}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        </Typography>
      </div>
      <div className={styles.form}>
        <div className={styles.wrap}>
          <input
            className={styles.input}
            value={value || ""}
            placeholder="Email..."
            onChange={onChange}
          />
          <Typography className={styles.label} size={TypographySizes.extraSmall}>
            EMAIL ADDRESS
          </Typography>
        </div>
        <Button className={styles.button}>Subscribe Us</Button>
      </div>
    </Container>
  )
}
