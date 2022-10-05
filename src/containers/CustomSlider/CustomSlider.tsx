import React from "react"
import classNames from "classnames"
import Slider, { Settings } from "react-slick"
import styles from "./CustomSlider.module.pcss"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

interface CustomSliderProps extends React.PropsWithChildren {
  pagination?: boolean
  arrows?: boolean
  autoplay?: boolean
  infinite?: boolean
  autoplaySpeed?: number
  slidesToShow?: number
  className?: string
  nextArrow?: JSX.Element
  prevArrow?: JSX.Element
}

export const CustomSlider: React.FC<CustomSliderProps> = ({
  children,
  pagination,
  autoplay,
  infinite,
  arrows = true,
  autoplaySpeed = 1000,
  slidesToShow = 1,
  nextArrow,
  prevArrow,
  className,
}) => {
  const classes = classNames(styles.slider, className)

  const settings: Settings = {
    dots: pagination,
    arrows: arrows,
    autoplay: autoplay,
    infinite: infinite,
    speed: 500,
    autoplaySpeed: autoplaySpeed,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    nextArrow: nextArrow,
    prevArrow: prevArrow,
    appendDots: (dots) => (
      <div>
        <ul className={styles.bullets}>{dots}</ul>
      </div>
    ),
    customPaging: (i) => <button className={styles.bullet} />,
  }

  return (
    <Slider className={classes} {...settings}>
      {children}
    </Slider>
  )
}
