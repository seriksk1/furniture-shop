import React from "react"
import classNames from "classnames"
import styles from "./MessageContainer.module.pcss"
import { Button, MessageCard } from "../../components"
import { ReplyIcon } from "../../assets/icons"

interface MessageContainerProps {
  className?: string
  message: ProductMessage
  messageType: MessagesType
}

export const MessageContainer: React.FC<MessageContainerProps> = ({
  className,
  message,
  messageType,
}) => {
  const [answersOpen, setAnswersOpen] = React.useState(false)
  const [answers, setAnswers] = React.useState<AnswerMessage[]>([])
  const classes = classNames(styles.container, className)

  const onAnswersHide = () => {
    setAnswersOpen(false)
  }

  const onAnswersOpen = () => {
    setAnswersOpen(true)
  }

  React.useEffect(() => {
    setAnswersOpen(false)
    setAnswers([])
  }, [messageType])

  React.useEffect(() => {
    if ("answers" in message) {
      setAnswers(message.answers)
    }
  }, [message])

  return (
    <div className={classes}>
      <MessageCard
        className={styles.card}
        message={message}
        messageType={messageType}
        onAnswersOpen={onAnswersOpen}
        answers={answers}
      />

      {answersOpen && (
        <div className={styles.answers}>
          {answers?.map((answer, i) => {
            return (
              <div key={i} className={styles.wrap}>
                {i === 0 && <ReplyIcon className={styles.reply} />}
                <MessageCard className={styles.answer} message={answer} messageType="answer" />
              </div>
            )
          })}
        </div>
      )}

      {answersOpen && (
        <div className={styles.hide}>
          <Button className={styles.button} onClick={onAnswersHide}>
            Hide Answers
          </Button>
        </div>
      )}
    </div>
  )
}
