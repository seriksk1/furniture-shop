import React from "react"

interface Props {
  className?: string
}

export const ReplyIcon: React.FC<Props> = ({ className }) => {
  return (
    <svg
      className={className}
      width="35"
      height="35"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.875 14.5833L29.1667 21.875L21.875 29.1666"
        stroke="#333333"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.83334 5.83331V16.0416C5.83334 17.5887 6.44792 19.0725 7.54189 20.1664C8.63585 21.2604 10.1196 21.875 11.6667 21.875H29.1667"
        stroke="#333333"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
