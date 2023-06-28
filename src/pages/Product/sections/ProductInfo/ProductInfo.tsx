import React from "react"
import { useDispatch } from "react-redux"
import classNames from "classnames"
import styles from "./ProductInfo.module.pcss"
import {
  Accordion,
  Button,
  Container,
  Counter,
  Image,
  Price,
  Rating,
  Typography,
  TypographyColors,
  TypographySizes,
  TypographyWeights,
} from "../../../../components"
import { Details } from "./Details/Details"
import { ArrowForward } from "../../../../assets/icons"
import { addToCart } from "../../../../store"

interface ProductInfoProps {
  className?: string
  product: Product
}

export const ProductInfo: React.FC<ProductInfoProps> = ({ className, product }) => {
  const dispatch = useDispatch()
  const classes = classNames(styles.container, className)
  const [quantity, setQuantity] = React.useState(1)

  const { id, image, name, description, stars, discountPrice, isNew, price } = product

  const onAddToCart = () => {
    dispatch(addToCart({ product, quantity }))
  }

  return (
    <Container className={classes}>
      <Image className={styles.image} src={image} alt="product" />
      <div className={styles.info}>
        <Typography
          className={styles.collection}
          size={TypographySizes.medium}
          color={TypographyColors.gray}
        >
          Collection Bed
        </Typography>
        <Typography className={styles.name} size={TypographySizes.extraLarge}>
          {name}
        </Typography>

        <div className={styles.row}>
          <Rating className={styles.stars} stars={stars} />
          <Typography className={styles.reviews}>5 reviews</Typography>
        </div>

        <Typography className={styles.description}>{description || "No description"}</Typography>

        <div className={styles.amount}>
          <div className={styles.price}>
            <Typography className={styles.label} size={TypographySizes.medium}>
              Price
            </Typography>
            <Price
              className={styles.value}
              size={TypographySizes.large}
              weight={TypographyWeights.medium}
              price={price}
            />
          </div>
          <div className={styles.quantity}>
            <Typography className={styles.label} size={TypographySizes.medium}>
              Quantity
            </Typography>
            <Counter className={styles.counter} value={quantity} setValue={setQuantity} />
          </div>
        </div>

        <div className={styles.details}>
          <Typography className={styles.label} size={TypographySizes.medium}>
            Details
          </Typography>
          <Details className={styles.list} />
        </div>

        <div className={styles.bottom}>
          <Button onClick={onAddToCart}>
            <span>Add to cart</span>
            <ArrowForward />
          </Button>
          <div className={styles.total}>
            <Typography className={styles.label} size={TypographySizes.medium}>
              Total Price:
            </Typography>
            <Price
              className={styles.value}
              size={TypographySizes.large}
              weight={TypographyWeights.medium}
              price={quantity * price}
            />
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
    </Container>
  )
}
