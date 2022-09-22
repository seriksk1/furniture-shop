import React from "react"
import classNames from "classnames"
import styles from "./ProductInfo.module.pcss"
import productImage from "../../../../assets/images/auth-bg-1.png"
import {
  Accordion,
  Button,
  Counter,
  Rating,
  Typography,
  TypographyColors,
  TypographySizes,
  TypographyWeights,
} from "../../../../components"
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
        <Typography
          className={styles.collection}
          size={TypographySizes.medium}
          color={TypographyColors.gray}
        >
          Collection Bed
        </Typography>
        <Typography className={styles.name} size={TypographySizes.extraLarge}>
          Pohlman Upholstered Low Profile Platform Bed
        </Typography>

        <div className={styles.row}>
          <Rating className={styles.stars} stars={5} />
          <Typography className={styles.reviews}>5 reviews</Typography>
        </div>

        <Typography className={styles.description}>
          This platform elevates your bedroom with a sleek, modern look. It&apos;s crafted from
          solid wood with a black finish contemporary profile. The panel headboard strikes a
          rectangular silhouette, and it&apos;s upholstered and stuffed with polyester.
        </Typography>

        <div className={styles.row}>
          <div className={styles.price}>
            <Typography className={styles.label} size={TypographySizes.medium}>
              Price
            </Typography>
            <Typography
              className={styles.value}
              size={TypographySizes.large}
              weight={TypographyWeights.medium}
            >
              $210.00
            </Typography>
          </div>
          <div className={styles.quantity}>
            <Typography className={styles.label} size={TypographySizes.medium}>
              Quantity
            </Typography>
            <Counter className={styles.counter} value={counterValue} setValue={setCounterValue} />
          </div>
        </div>

        <div className={styles.details}>
          <div className={styles.label}>Details</div>
          <div className={styles.list}>
            <div className={styles.detail}>
              <Typography className={styles.text}>Size:</Typography>
              <Typography className={styles.text}>{"72'' H x 31.5'' W"}</Typography>
            </div>
            <div className={styles.detail}>
              <Typography className={styles.text}>Seat Height:</Typography>
              <Typography className={styles.text}>{"25.5''"}</Typography>
            </div>
            <div className={styles.detail}>
              <Typography className={styles.text}>Materials:</Typography>
              <Typography className={styles.text}>
                Playwood, Semi Aniline Italian Leather
              </Typography>
            </div>
            <div className={styles.detail}>
              <Typography className={styles.text}>Color:</Typography>
              <Typography className={styles.text}>Gray</Typography>
            </div>
            <div className={styles.detail}>
              <Typography className={styles.text}>Weight:</Typography>
              <Typography className={styles.text}>180Ibs</Typography>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <Button>
            <span>Add to cart</span>
            <ArrowForward />
          </Button>
          <div className={styles.total}>
            <Typography className={styles.label} size={TypographySizes.medium}>
              Total Price:
            </Typography>
            <Typography
              className={styles.value}
              size={TypographySizes.large}
              weight={TypographyWeights.medium}
            >
              $210.00
            </Typography>
          </div>
        </div>

        <div className={styles.accordions}>
          <Accordion className={styles.accordion} title="Overwiew & Dimentions">
            <Typography className={styles.accordionText}>
              {`This platform elevates your bedroom with a sleek, modern look. It's crafted from solid
              wood with a black finish contemporary profile.`}
            </Typography>
            <Typography className={styles.accordionText}>
              {`This platform elevates your bedroom with a sleek, modern look. It's crafted from solid
              wood with a black finish contemporary profile. The panel headboard strikes a
              rectangular silhouette, and it's upholstered and stuffed with polyester.`}
            </Typography>
          </Accordion>
          <Accordion className={styles.accordion} title="Shipping & Returns">
            <Typography className={styles.accordionText}>
              {`This platform elevates your bedroom with a sleek, modern look. It's crafted from solid
              wood with a black finish contemporary profile.`}
            </Typography>
            <Typography className={styles.accordionText}>
              {`This platform elevates your bedroom with a sleek, modern look. It's crafted from
              solid wood with a black finish contemporary profile. The panel headboard strikes a
              rectangular silhouette, and it's upholstered and stuffed with polyester.`}
            </Typography>
          </Accordion>
        </div>
      </div>
    </div>
  )
}
