import React from "react"

interface Props {
  className?: string
  onClick?: () => void
}

export const MinusIcon: React.FC<Props> = ({ className, onClick }) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.8334 10.8333H15.8334V9.16663H10.8334H9.16669H4.16669V10.8333H9.16669H10.8334Z"
        fill="#BDBDBD"
      />
    </svg>
  )
}
