import React from "react"
import classNames from "classnames"
import styles from "./Reviews.module.pcss"
import { Button, ButtonGroup, ButtonTypes, Dropdown, Typography } from "../../../../components"
import { PlusIcon } from "../../../../assets/icons"
import { MessageContainer } from "../../../../containers"
import { questions, reviews } from "../../../../mocks"

interface ReviewsProps {
  className: string
}

enum MessageTypes {
  question = "question",
  review = "review",
}

const sortTypes = ["Relevance", "Last Update", "First Update"]

export const Reviews: React.FC<ReviewsProps> = ({ className }) => {
  const classes = classNames(styles.container, className)
  const [messages, setMessages] = React.useState<ProductMessageList>([])
  const [messagesType, setMessagesType] = React.useState<MessagesType>(MessageTypes.review)

  const onReviewsTypeSet = () => {
    setMessagesType(MessageTypes.review)
  }

  const onQuestionsTypeSet = () => {
    setMessagesType(MessageTypes.question)
  }

  React.useEffect(() => {
    setMessages(messagesType === MessageTypes.review ? reviews : questions)
  }, [messagesType])

  return (
    <div className={classes}>
      <ButtonGroup className={styles.selection}>
        <Button
          className={messagesType === MessageTypes.review ? styles.selected : styles.notSelected}
          onClick={onReviewsTypeSet}
          type={ButtonTypes.borderless}
        >
          Reviews ({reviews.length})
        </Button>
        <Button
          className={messagesType === MessageTypes.question ? styles.selected : styles.notSelected}
          onClick={onQuestionsTypeSet}
          type={ButtonTypes.borderless}
        >
          Q&A ({questions.length})
        </Button>
      </ButtonGroup>

      <div className={styles.add}>
        <Button>
          <PlusIcon />
          <span>Add {messagesType}</span>
        </Button>
      </div>

      <div className={styles.sort}>
        <Typography className={styles.label}>Sort by:</Typography>
        <Dropdown className={styles.dropdown} list={sortTypes} />
      </div>

      <div className={styles.messages}>
        {messages.map((message, i) => (
          <MessageContainer
            key={i}
            className={styles.message}
            message={message}
            messageType={messagesType}
          />
        ))}
      </div>
    </div>
  )
}
