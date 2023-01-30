import React from "react"
import styles from "./Details.module.pcss"
import { Typography } from "../../../../../components"
import classNames from "classnames"

interface DetailsProps {
  className?: string
  details?: { [key: string]: string }
}

export const Details: React.FC<DetailsProps> = ({ className, details }) => {
  const classes = classNames(styles.details, className)

  return (
    <div className={classes}>
      <div className={styles.detail}>
        <Typography className={styles.text}>Size:</Typography>
        <Typography className={styles.text}>{"72'' H x 31.5'' W"}</Typography>
      </div>
      <div className={styles.detail}>
        <Typography className={styles.text}>Seat Height:</Typography>
        <Typography className={styles.text}>{"25.5''"}</Typography>
      </div>
      <div className={styles.detail}>
        <Typography className={styles.text}>Materials:</Typography>
        <Typography className={styles.text}>Playwood, Semi Aniline Italian Leather</Typography>
      </div>
      <div className={styles.detail}>
        <Typography className={styles.text}>Color:</Typography>
        <Typography className={styles.text}>Gray</Typography>
      </div>
      <div className={styles.detail}>
        <Typography className={styles.text}>Weight:</Typography>
        <Typography className={styles.text}>180Ibs</Typography>
      </div>
    </div>
  )
}
