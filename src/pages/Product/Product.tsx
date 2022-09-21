import React from "react"
import { Breadcrumbs } from "../../components"
import styles from "./Product.module.pcss"
import { ProductInfo, Reviews, SimilarProducts } from "./sections"

const breadcrumpsList: BreadcrumbsList = [
  { path: "/furniture", name: "Furniture" },
  { path: "/furniture/sofas", name: "Collection Bed" },
  { path: "/furniture/sofas/1", name: "Pohlman Upholstered Low Profile Platform Bed" },
]

export const Product: React.FC = () => {
  return (
    <div className={styles.container}>
      <Breadcrumbs list={breadcrumpsList} />
      <ProductInfo className={styles.product} />
      <SimilarProducts className={styles.similar} />
      <Reviews className={styles.reviews} />
    </div>
  )
}
