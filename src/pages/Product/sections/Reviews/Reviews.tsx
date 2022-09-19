import React from "react"
import classNames from "classnames"
import styles from "./Reviews.module.pcss"
import { Button, ButtonGroup, Dropdown } from "../../../../components"
import { PlusIcon } from "../../../../assets/icons"

interface ReviewsProps {
  className: string
}

type MessagesType = "review" | "question"

const sortTypes = ["Relevance", "Last Update", "First Update"]

export const Reviews: React.FC<ReviewsProps> = ({ className }) => {
  const [messagesType, setMessagesType] = React.useState<MessagesType>("review")
  const classes = classNames(styles.container, className)

  const onMessagesTypeToggle = () => {
    setMessagesType((prev) => (prev === "review" ? "question" : "review"))
  }

  return (
    <div className={classes}>
      <ButtonGroup className={styles.selection}>
        <Button
          className={messagesType === "review" ? styles.selected : styles.notSelected}
          onClick={onMessagesTypeToggle}
          type="borderless"
          size="small"
        >
          Reviews ({5})
        </Button>
        <Button
          className={messagesType === "question" ? styles.selected : styles.notSelected}
          onClick={onMessagesTypeToggle}
          type="borderless"
          size="small"
        >
          Q&A ({3})
        </Button>
      </ButtonGroup>

      <div className={styles.add}>
        <Button>
          <PlusIcon />
          <span>Add {messagesType}</span>
        </Button>
      </div>

      <div className={styles.sort}>
        <div className={styles.label}>Sort by:</div>
        <Dropdown className={styles.dropdown} list={sortTypes} />
      </div>

      <div className=""></div>
    </div>
  )
}
