import React from "react"
interface Props {
  className?: string
  onClick?: () => void
}

export const ChevronLeft: React.FC<Props> = ({ className, onClick }) => {
  return (
    <svg
      onClick={onClick}
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.705 7.41L14.295 6L8.295 12L14.295 18L15.705 16.59L11.125 12L15.705 7.41Z"
        fill="#BDBDBD"
      />
    </svg>
  )
}
