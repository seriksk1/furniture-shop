import React from "react"
import classNames from "classnames"
import styles from "./Accordion.module.pcss"
import { ChevronLeft } from "../../../assets/icons"
import { Typography, TypographySizes } from "../Typography/Typography"

interface AccordionProps extends React.PropsWithChildren {
  className?: string
  title: string
}

export const Accordion: React.FC<AccordionProps> = ({ className, children, title }) => {
  const [open, setOpen] = React.useState(false)
  const classes = classNames(
    styles.container,
    {
      [styles.active]: open,
    },
    className
  )

  const onToggle = () => {
    setOpen((prev) => !prev)
  }

  return (
    <div className={classes}>
      <div onClick={onToggle} className={styles.top}>
        <Typography className={styles.title} size={TypographySizes.medium}>
          {title}
        </Typography>
        <ChevronLeft className={styles.icon} />
      </div>
      <div className={styles.bottom}>{children}</div>
    </div>
  )
}
