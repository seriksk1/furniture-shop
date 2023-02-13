import React from "react"
import classNames from "classnames"
import {
  Avatar,
  Rating,
  Typography,
  TypographyColors,
  TypographySizes,
  TypographyWeights,
} from "../UI"
import { MessageTypes } from "./enums"
import { AnswerIcon } from "../../assets/icons"
import styles from "./MessageCard.module.pcss"

interface MessageCardProps {
  className?: string
  messageType?: MessageType
  message: ProductMessage
  answers?: AnswerMessage[]
  answersOpen?: boolean
  onAnswersOpen?: () => void
}

export const MessageCard: React.FC<MessageCardProps> = ({
  className,
  messageType = MessageTypes.review,
  message,
  answers,
  answersOpen,
  onAnswersOpen,
}) => {
  const { avatar, username, date, text } = message
  const classes = classNames(styles.card, className)

  const [isQuestion, isReview] = [
    messageType === MessageTypes.question,
    messageType === MessageTypes.review,
  ]

  return (
    <div className={classes}>
      <div className={styles.top}>
        <div className={styles.user}>
          <Avatar className={styles.avatar} avatar={avatar} username={username} />
          <div className={styles.column}>
            <Typography className={styles.username} weight={TypographyWeights.medium}>
              {username}
            </Typography>
            <Typography
              className={styles.date}
              size={TypographySizes.extraSmall}
              color={TypographyColors.gray}
            >
              {date.toDateString()}
            </Typography>
          </div>
        </div>
        {isReview && <Rating stars={5} />}
      </div>

      <div className={styles.bottom}>
        <Typography className={styles.message}>{text}</Typography>
        {isQuestion && (
          <div className={styles.answers}>
            <AnswerIcon className={styles.icon} />
            {answers?.length ? (
              <Typography
                className={styles.amount}
                size={TypographySizes.extraSmall}
                weight={TypographyWeights.medium}
                onClick={onAnswersOpen}
              >
                {answers.length} answers
              </Typography>
            ) : null}
          </div>
        )}
      </div>

      {isQuestion && (
        <div className={styles.answering}>
          <input type="text" placeholder="Please, write your answer..." />
        </div>
      )}
    </div>
  )
}
