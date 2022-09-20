import React from "react"
import classNames from "classnames"
import styles from "./Avatar.module.pcss"

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
    return <div className={classes}>{firstTwoLetters}</div>
  }

  return <img className={classes} src={avatar} alt="avatar" />
}
