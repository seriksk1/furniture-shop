import React, { ImgHTMLAttributes } from "react"
import { imagePlaceholder } from "../../../constants"

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {}

export const Image: React.FC<ImageProps> = ({ className, src, ...props }) => {
  const image = src || imagePlaceholder

  return <img className={className} src={image} {...props} />
}
