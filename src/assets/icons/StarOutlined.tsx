import React from "react"

interface Props {
  className?: string
}

export const StarOutlined: React.FC<Props> = ({ className }) => {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 14.8084L15.15 17.9167L13.7833 12.0584L18.3333 8.11671L12.3417 7.60837L10 2.08337L7.65833 7.60837L1.66667 8.11671L6.21667 12.0584L4.85 17.9167L10 14.8084Z"
        fill="#FFBF43"
      />
    </svg>
  )
}
