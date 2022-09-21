interface AnswerMessage {
  avatar?: string
  username: string
  text: string
  date: Date
}

interface QuestionMessage {
  avatar?: string
  username: string
  text: string
  date: Date
  answers: AnswerMessage[]
}

interface ReviewMessage {
  avatar?: string
  username: string
  text: string
  date: Date
}

type ProductMessage = QuestionMessage | ReviewMessage

type ReviewMessageList = ReviewMessage[]
type QuestionMessageList = QuestionMessage[]
type ProductMessageList = ReviewMessageList | QuestionMessageList

type MessagesType = "review" | "question"
