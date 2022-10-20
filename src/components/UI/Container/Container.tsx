import React from "react"
import classNames from "classnames"
import styles from "./Container.module.pcss"

interface ContainerProps extends React.PropsWithChildren {
  className?: string
}

export const Container: React.FC<ContainerProps> = ({ className, children }) => {
  const classes = classNames(styles.container, className)

  return <div className={classes}>{children}</div>
}
