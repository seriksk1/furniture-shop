import React from "react"
import { Rating } from "../UI"
import styles from "./ProductCard.module.pcss"

interface ProductCardProps {
  product: Product
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { image, stars, name, price } = product

  return (
    <div className={styles.card}>
      <img className={styles.image} src={image} />
      <Rating className={styles.stars} stars={stars} />
      <div className={styles.name}>{name}</div>
      <div className={styles.price}>{price}</div>
    </div>
  )
}
