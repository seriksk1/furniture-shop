import React from "react"
import classNames from "classnames"
import styles from "./Hero.module.pcss"
import {
  Button,
  ButtonColors,
  Typography,
  TypographyColors,
  TypographyLineHeights,
  TypographySizes,
  TypographyWeights,
} from "../../../../components"
import { ArrowForward } from "../../../../assets/icons"

const heroImage = require("../../../../assets/images/landing/hero-image.png")
const heroDecoration = require("../../../../assets/images/landing/hero-decoration.png")

interface HeroProps {
  className?: string
}

export const Hero: React.FC<HeroProps> = ({ className }) => {
  const classes = classNames(styles.hero, className)

  return (
    <div className={classes}>
      <div className={styles.content}>
        <div className={styles.left}>
          <Typography
            className={styles.title}
            size={TypographySizes.huge}
            lineHeight={TypographyLineHeights.small}
            weight={TypographyWeights.medium}
            color={TypographyColors.white}
          >
            Best Designs of Furniture Collection 2022
          </Typography>
          <Typography
            className={styles.subtitle}
            size={TypographySizes.large}
            lineHeight={TypographyLineHeights.small}
            color={TypographyColors.white}
          >
            We have 2000+ Review and our customers trust on our Furniture and Quality products
          </Typography>
          <Button className={styles.button} color={ButtonColors.white}>
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
