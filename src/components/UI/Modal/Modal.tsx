import React from "react"
import classNames from "classnames"
import styles from "./Modal.module.pcss"
import { CloseIcon } from "../../../assets/icons"

interface ModalProps extends React.PropsWithChildren {
  className?: string
  onClose?: () => void
}

export const Modal: React.FC<ModalProps> = ({ className, children, onClose }) => {
  const classes = classNames(styles.content, className)

  return (
    <div className={styles.container}>
      <div className={classes}>{children}</div>
      <div className={styles.close} onClick={onClose}>
        <CloseIcon />
      </div>
    </div>
  )
}
