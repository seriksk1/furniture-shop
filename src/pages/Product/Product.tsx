import React from "react"
import styles from "./Product.module.pcss"
import { Breadcrumbs } from "../../components"
import { breadcrumpsProduct } from "../../mocks"
import { ProductInfo, Reviews, SimilarProducts } from "./sections"
import { useParams } from "react-router"
import { useGetProductQuery } from "../../store"

export const Product: React.FC = () => {
  const { productId } = useParams()
  const { data: product } = useGetProductQuery(Number(productId), { skip: !productId })

  return (
    <div className={styles.container}>
      <Breadcrumbs list={breadcrumpsProduct} />
      {product && <ProductInfo className={styles.product} product={product} />}
      <SimilarProducts className={styles.similar} />
      <Reviews className={styles.reviews} />
    </div>
  )
}
