import React from "react"
import classNames from "classnames"
import styles from "./CategoriesPanel.module.pcss"
import { CategoryList } from "./CategoryList/CategoryList"
import { categories } from "../../../../mocks"
import { useToggle } from "../../../../hooks"
import { CategoryForm } from "./forms"
import {
  Button,
  ButtonSizes,
  Modal,
  Typography,
  TypographyColors,
  TypographySizes,
} from "../../../../components"

interface Props {
  className?: string
}

export const CategoriesPanel: React.FC<Props> = ({ className }) => {
  const classes = classNames(styles.container, className)
  const { active: modalActive, onToggle } = useToggle(false)

  return (
    <div className={classes}>
      <CategoryList className={styles.list} categories={categories} />

      {modalActive && (
        <Modal className={styles.modal} onClose={onToggle}>
          <Typography
            className={styles.modalTitle}
            size={TypographySizes.large}
            color={TypographyColors.dark}
          >
            Create category
          </Typography>
          <CategoryForm />
        </Modal>
      )}
    </div>
  )
}
