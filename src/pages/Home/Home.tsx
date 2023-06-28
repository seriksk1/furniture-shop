import React from "react"
import {
  BestProducts,
  Categories,
  DiscountBanner,
  Hero,
  NewProducts,
  SubscribeUs,
} from "./sections"
import styles from "./Home.module.pcss"

export const Home: React.FC = () => {
  return (
    <div className={styles.page}>
      <Hero className={styles.section} />
      <BestProducts className={styles.section} />
      <NewProducts className={styles.section} />
      <DiscountBanner className={styles.section} />
      <Categories className={styles.section} />
      <SubscribeUs className={styles.section} />
    </div>
  )
}
