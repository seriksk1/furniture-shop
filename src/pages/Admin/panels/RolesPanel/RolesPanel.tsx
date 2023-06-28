import React from "react"
import styles from "./RolesPanel.module.pcss"
import classNames from "classnames"
import { RoleForm } from "./RoleForm/RoleForm"
interface Props {
  className?: string
}

export const RolesPanel: React.FC<Props> = ({ className }) => {
  const classes = classNames(styles.container, className)

  return (
    <div className={classes}>
      <RoleForm />
    </div>
  )
}
