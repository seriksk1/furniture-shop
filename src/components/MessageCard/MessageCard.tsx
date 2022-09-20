import React from "react"
import classNames from "classnames"
import { Avatar, Rating } from "../UI"
import { MessageTypes } from "./enums"
import { AnswerIcon } from "../../assets/icons"
import styles from "./MessageCard.module.pcss"

interface MessageCardProps {
  className?: string
  messageType?: MessageType
  message: ProductMessage
  answers?: AnswerMessage[]
  onAnswersOpen?: () => void
}

export const MessageCard: React.FC<MessageCardProps> = ({
  className,
  messageType = MessageTypes.review,
  message,
  answers,
  onAnswersOpen,
}) => {
  const { avatar, username, date, text } = message
  const classes = classNames(styles.card, className)

  return (
    <div className={classes}>
      <div className={styles.top}>
        <div className={styles.user}>
          <Avatar className={styles.avatar} avatar={avatar} username={username} />
          <div className={styles.column}>
            <div className={styles.username}>{username}</div>
            <div className={styles.date}>{date.toDateString()}</div>
          </div>
        </div>
        {messageType === MessageTypes.review && <Rating stars={5} />}
      </div>
      <div className={styles.bottom}>
        <div className={styles.message}>{text}</div>
        {messageType === MessageTypes.question && (
          <div className={styles.answers}>
            <AnswerIcon className={styles.icon} />
            {answers && Boolean(answers.length) && (
              <div className={styles.amount} onClick={onAnswersOpen}>
                {answers.length} answers
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
