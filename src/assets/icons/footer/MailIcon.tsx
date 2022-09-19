import React from "react"

interface Props {
  className?: string
}

export const MailIcon: React.FC<Props> = ({ className }) => {
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
        d="M3.33335 3.33337H16.6667C17.5834 3.33337 18.3334 4.08337 18.3334 5.00004V15C18.3334 15.9167 17.5834 16.6667 16.6667 16.6667H3.33335C2.41669 16.6667 1.66669 15.9167 1.66669 15V5.00004C1.66669 4.08337 2.41669 3.33337 3.33335 3.33337Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.3334 5L10 10.8333L1.66669 5"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
