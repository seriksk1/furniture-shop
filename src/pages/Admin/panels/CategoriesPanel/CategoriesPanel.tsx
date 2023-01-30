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
  const { active: isAddModalActive, onToggle: onAddModalToggle } = useToggle(false)
  const { active: isEditModalActive, onToggle: onEditModalToggle } = useToggle(false)

  return (
    <div className={classes}>
      <CategoryList
        className={styles.list}
        categories={categories}
        onCategoryCreate={onAddModalToggle}
        onCategoryEdit={onEditModalToggle}
      />

      {isAddModalActive && (
        <Modal className={styles.modal} onClose={onAddModalToggle}>
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

      {isEditModalActive && (
        <Modal className={styles.modal} onClose={onEditModalToggle}>
          <Typography
            className={styles.modalTitle}
            size={TypographySizes.large}
            color={TypographyColors.dark}
          >
            Edit category
          </Typography>
          <CategoryForm />
        </Modal>
      )}
    </div>
  )
}
