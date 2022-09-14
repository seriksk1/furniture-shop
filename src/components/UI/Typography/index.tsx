import React from "react"

interface TypographyProps {
  className?: string
}

export const Typography: React.FC<TypographyProps & React.PropsWithChildren> = ({
  children,
  className,
}) => {
  return <p className={className}>{children}</p>
}
