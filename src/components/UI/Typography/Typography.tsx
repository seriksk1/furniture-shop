import React from "react"
import classNames from "classnames"
import styles from "./Typography.module.pcss"
import {
  TypographyColors,
  TypographySizes,
  TypographyWeights,
  TypographyLineHeights,
} from "./enums"

export * from "./enums"

export interface TypographyProps {
  className?: string
  size?: TypographySizes
  color?: TypographyColors
  weight?: TypographyWeights
  lineHeight?: TypographyLineHeights
  onClick?: () => void
}

export const Typography: React.FC<TypographyProps & React.PropsWithChildren> = ({
  children,
  className,
  size = TypographySizes.small,
  color = TypographyColors.dark,
  weight = TypographyWeights.regular,
  lineHeight = TypographyLineHeights.default,
  onClick,
}) => {
  const classes = classNames(
    styles.container,
    styles[size],
    styles[color],
    styles[weight],
    styles[lineHeight],
    className
  )
  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  )
}
