import React from "react"

interface Props {
  className?: string
}

export const SearchOutlined: React.FC<Props> = ({ className }) => {
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
        d="M22.9761 20.7885H21.824L21.4156 20.3947C22.8448 18.7322 23.7052 16.5739 23.7052 14.226C23.7052 8.99058 19.4615 4.74683 14.2261 4.74683C8.99064 4.74683 4.74689 8.99058 4.74689 14.226C4.74689 19.4614 8.99064 23.7052 14.2261 23.7052C16.574 23.7052 18.7323 22.8447 20.3948 21.4156L20.7886 21.8239V22.976L28.0802 30.2531L30.2531 28.0802L22.9761 20.7885ZM14.2261 20.7885C10.5948 20.7885 7.66355 17.8572 7.66355 14.226C7.66355 10.5947 10.5948 7.66349 14.2261 7.66349C17.8573 7.66349 20.7886 10.5947 20.7886 14.226C20.7886 17.8572 17.8573 20.7885 14.2261 20.7885Z"
        fill="#333333"
      />
    </svg>
  )
}
