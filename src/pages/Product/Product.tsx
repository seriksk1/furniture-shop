import React from "react"
import styles from "./Product.module.pcss"

export const Product: React.FC = () => {
  // const { id } = useParams()
  // const { data: product } = useGetProductQuery(id)

  return (
    <div className={styles.container}>
      wtf
      {/* <Breadcrumbs list={breadcrumpsProduct} /> */}
      {/* {false && <ProductInfo className={styles.product} product={false} />} */}
      {/* <SimilarProducts className={styles.similar} /> */}
      {/* <Reviews className={styles.reviews} /> */}
    </div>
  )
}
