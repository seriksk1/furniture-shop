import React from "react"
import classNames from "classnames"
import styles from "./ProductInfo.module.pcss"
import productImage from "../../../../assets/images/auth-bg-1.png"
import { Accordion, Button, Counter, Rating } from "../../../../components"
import { ArrowForward } from "../../../../assets/icons"

interface ProductInfoProps {
  className?: string
}

export const ProductInfo: React.FC<ProductInfoProps> = ({ className }) => {
  const [counterValue, setCounterValue] = React.useState(1)
  const classes = classNames(styles.container, className)

  return (
    <div className={classes}>
      <img className={styles.image} src={productImage} alt="product" />
      <div className={styles.info}>
        <div className={styles.collection}>Collection Bed</div>
        <div className={styles.name}>Pohlman Upholstered Low Profile Platform Bed</div>

        <div className={styles.row}>
          <Rating className={styles.stars} stars={5} />
          <div className={styles.reviews}>5 reviews</div>
        </div>

        <div className={styles.description}>
          This platform elevates your bedroom with a sleek, modern look. It&apos;s crafted from
          solid wood with a black finish contemporary profile. The panel headboard strikes a
          rectangular silhouette, and it&apos;s upholstered and stuffed with polyester.
        </div>

        <div className={styles.row}>
          <div className={styles.price}>
            <div className={styles.label}>Price</div>
            <div className={styles.value}>$210.00</div>
          </div>
          <div className={styles.quantity}>
            <div className={styles.label}>Quantity</div>
            <Counter className={styles.counter} value={counterValue} setValue={setCounterValue} />
          </div>
        </div>

        <div className={styles.details}>
          <div className={styles.label}>Details</div>
          <div className={styles.list}>
            <div className={styles.detail}>
              <div className={styles.text}>Size:</div>
              <div className={styles.text}>{"72'' H x 31.5'' W"}</div>
            </div>
            <div className={styles.detail}>
              <div className={styles.text}>Seat Height:</div>
              <div className={styles.text}>{"25.5''"}</div>
            </div>
            <div className={styles.detail}>
              <div className={styles.text}>Materials:</div>
              <div className={styles.text}>Playwood, Semi Aniline Italian Leather</div>
            </div>
            <div className={styles.detail}>
              <div className={styles.text}>Color:</div>
              <div className={styles.text}>Gray</div>
            </div>
            <div className={styles.detail}>
              <div className={styles.text}>Weight:</div>
              <div className={styles.text}>180Ibs</div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <Button size="small">
            <span>Add to cart</span>
            <ArrowForward />
          </Button>
          <div className={styles.total}>
            <div className={styles.label}>Total Price:</div>
            <div className={styles.value}>$210.00</div>
          </div>
        </div>

        <div className={styles.accordions}>
          <Accordion className={styles.accordion} title="Overwiew & Dimentions">
            <div className={styles.accordionText}>
              {`This platform elevates your bedroom with a sleek, modern look. It's crafted from solid
              wood with a black finish contemporary profile.`}
            </div>
            <div className={styles.accordionText}>
              {`This platform elevates your bedroom with a sleek, modern look. It's crafted from solid
              wood with a black finish contemporary profile. The panel headboard strikes a
              rectangular silhouette, and it's upholstered and stuffed with polyester.`}
            </div>
          </Accordion>
          <Accordion className={styles.accordion} title="Shipping & Returns">
            <div className={styles.accordionText}>
              {`This platform elevates your bedroom with a sleek, modern look. It's crafted from solid
              wood with a black finish contemporary profile.`}
            </div>
            <div className={styles.accordionText}>
              {`This platform elevates your bedroom with a sleek, modern look. It's crafted from
              solid wood with a black finish contemporary profile. The panel headboard strikes a
              rectangular silhouette, and it's upholstered and stuffed with polyester.`}
            </div>
          </Accordion>
        </div>
      </div>
    </div>
  )
}
