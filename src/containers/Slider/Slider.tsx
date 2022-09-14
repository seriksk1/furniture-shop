import React from "react"
import classNames from "classnames"
import Slider, { Settings } from "react-slick"
import { ChevronLeft } from "../../assets/icons"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import styles from "./CustomSlider.module.pcss"

interface CustomSliderProps extends React.PropsWithChildren {
  pagination?: boolean
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
  autoplaySpeed = 1000,
  slidesToShow = 1,
  nextArrow = <ChevronLeft />,
  prevArrow = <ChevronLeft />,
  className,
}) => {
  const classes = classNames(styles.slider, className)

  const settings: Settings = {
    dots: pagination,
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

  console.log(styles)

  return (
    <Slider className={classes} {...settings}>
      {children}
    </Slider>
  )
}
