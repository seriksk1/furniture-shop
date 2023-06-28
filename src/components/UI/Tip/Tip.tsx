import React from "react"
import classNames from "classnames"
import styles from "./Tip.module.pcss"
import { TipPositionX, TipTypes } from "./enums"
import { Typography, TypographyColors } from "../Typography/Typography"

export * from "./enums"

interface TipProps {
  type: TipTypes
  positionX?: TipPositionX
  className?: string
}

export const Tip: React.FC<TipProps> = ({ type, positionX = TipPositionX.left, className }) => {
  const classes = classNames(styles.tip, styles[type], styles[positionX], className)

  return (
    <Typography className={classes} color={TypographyColors.white}>
      {type}
    </Typography>
  )
}
