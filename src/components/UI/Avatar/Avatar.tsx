import React from "react"
import classNames from "classnames"
import styles from "./Avatar.module.pcss"
import {
  Typography,
  TypographyColors,
  TypographySizes,
  TypographyWeights,
} from "../Typography/Typography"

interface AvatarProps {
  className?: string
  avatar?: string
  username: string
}

export const Avatar: React.FC<AvatarProps> = ({ className, avatar, username }) => {
  const classes = classNames(
    styles.container,
    {
      [styles.default]: !avatar,
    },
    className
  )

  const firstTwoLetters = username.split(" ").map((word) => word[0])

  if (!avatar) {
    return (
      <Typography
        className={classes}
        size={TypographySizes.medium}
        weight={TypographyWeights.medium}
        color={TypographyColors.brand}
      >
        {firstTwoLetters}
      </Typography>
    )
  }

  return <img className={classes} src={avatar} alt="avatar" />
}
