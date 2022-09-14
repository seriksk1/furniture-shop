import React from "react"
import classNames from "classnames"
import styles from "./Hero.module.pcss"
import { Button } from "../../../../components"
import { ArrowForward } from "../../../../assets/icons"

const heroImage = require("../../../../assets/images/hero-image.png")
const heroDecoration = require("../../../../assets/images/hero-decoration.png")

interface HeroProps {
  className?: string
}

export const Hero: React.FC<HeroProps> = ({ className }) => {
  const classes = classNames(styles.hero, className)

  return (
    <div className={classes}>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.title}>Best Designs of Furniture Collection 2022</div>
          <div className={styles.subtitle}>
            We have 2000+ Review and our customers trust on our Furniture and Quality products
          </div>
          <Button className={styles.button} size="small">
            <span>Buy now</span>
            <ArrowForward />
          </Button>
        </div>
        <img className={styles.image} src={heroImage} alt="" />
      </div>

      <div className={styles.background}>
        <div className={styles.black} />
        <div className={styles.yellow} />
        <img className={styles.decoration} src={heroDecoration} alt="" />
      </div>
    </div>
  )
}
