import React from "react"

interface Props {
  className?: string
}

export const CheckIcon: React.FC<Props> = ({ className }) => {
  return (
    <svg
      className={className}
      width="89"
      height="89"
      viewBox="0 0 89 89"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32.6151 58.8699L17.1513 43.4062L11.8855 48.6349L32.6151 69.3645L77.1151 24.8645L71.8863 19.6357L32.6151 58.8699Z"
        fill="white"
      />
    </svg>
  )
}
