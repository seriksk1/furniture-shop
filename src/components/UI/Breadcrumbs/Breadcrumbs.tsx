import React from "react"
import classNames from "classnames"
import { Link } from "react-router-dom"
import { ChevronLeft } from "../../../assets/icons"
import styles from "./Breadcrumbs.module.pcss"

interface BreadcrumbsProps {
  className?: string
  list: BreadcrumbsList
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ className, list }) => {
  const classes = classNames(styles.container, className)

  return (
    <div className={classes}>
      {list.map((item, i) => {
        const { path, name } = item

        if (i === 0) {
          return (
            <div key={i} className={styles.item}>
              <Link to={path} className={styles.link}>
                {name}
              </Link>
            </div>
          )
        }

        return (
          <div key={i} className={styles.item}>
            <ChevronLeft className={styles.icon} />
            <Link to={path} className={styles.link}>
              {name}
            </Link>
          </div>
        )
      })}
    </div>
  )
}
