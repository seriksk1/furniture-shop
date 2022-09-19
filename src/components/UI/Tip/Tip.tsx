import React from "react"
import classNames from "classnames"
import styles from "./Tip.module.pcss"

type TipType = "sale" | "new"

interface TipProps {
  type: TipType
  positionX?: "left" | "right"
  className?: string
}

export const Tip: React.FC<TipProps> = ({ type, positionX = "left", className }) => {
  const classes = classNames(styles.tip, styles[type], styles[positionX], className)

  return <div className={classes}>{type}</div>
}
