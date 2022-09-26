import React from "react"
import styles from "./Product.module.pcss"
import { Breadcrumbs } from "../../components"
import { breadcrumpsProduct } from "../../mocks"
import { ProductInfo, Reviews, SimilarProducts } from "./sections"

export const Product: React.FC = () => {
  return (
    <div className={styles.container}>
      <Breadcrumbs list={breadcrumpsProduct} />
      <ProductInfo className={styles.product} />
      <SimilarProducts className={styles.similar} />
      <Reviews className={styles.reviews} />
    </div>
  )
}
