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
        {messageType === MessageTypes.review && <Rating stars={5} />}
      </div>
      <div className={styles.bottom}>
        <Typography className={styles.message}>{text}</Typography>

        {messageType === MessageTypes.question && (
          <div className={styles.answers}>
            <AnswerIcon className={styles.icon} />
            {answers && Boolean(answers.length) && (
              <Typography
                className={styles.amount}
                size={TypographySizes.extraSmall}
                weight={TypographyWeights.medium}
                onClick={onAnswersOpen}
              >
                {answers.length} answers
              </Typography>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
