import React from "react"
import classNames from "classnames"
import styles from "./Payment.module.pcss"
import { ArrowForward, CheckIcon } from "../../../../assets/icons"
import {
  Button,
  ButtonColors,
  Modal,
  PaymentForm,
  Typography,
  TypographyColors,
  TypographySizes,
  TypographyWeights,
} from "../../../../components"
import { useNavigate } from "react-router-dom"
import { appPaths } from "../../../../constants"
import { useToggle } from "../../../../hooks"

interface PaymentProps {
  className?: string
  toPrevStep: () => void
}

export const Payment: React.FC<PaymentProps> = ({ className, toPrevStep }) => {
  const navigate = useNavigate()
  const classes = classNames(styles.container, className)
  const { active: modalOpen, activate: onModalOpen, deactivate: onModalClose } = useToggle(false)

  const onModalSubmit = () => {
    onModalClose()
    navigate(appPaths.home)
  }

  return (
    <div className={classes}>
      <Typography className={styles.title} size={TypographySizes.extraLarge}>
        Payment
      </Typography>
      <div className={styles.content}>
        <PaymentForm className={styles.form} />
        <div className={styles.order}>
          <Typography className={styles.label} size={TypographySizes.medium}>
            Your Order
          </Typography>
          <div className={styles.costs}>
            <div className={styles.row}>
              <Typography>Item Cost</Typography>
              <Typography>$420.00</Typography>
            </div>
            <div className={styles.row}>
              <Typography>Delivery</Typography>
              <Typography>Free</Typography>
            </div>
            <div className={styles.row}>
              <Typography>Discount</Typography>
              <Typography>$0</Typography>
            </div>
            <div className={styles.row}>
              <Typography>Promocode</Typography>
              <Typography>$0</Typography>
            </div>
          </div>
          <div className={styles.total}>
            <Typography size={TypographySizes.medium}>Total Price:</Typography>
            <Typography size={TypographySizes.large} weight={TypographyWeights.medium}>
              $420.00
            </Typography>
          </div>
          <div className={styles.submit}>
            <Button onClick={onModalOpen}>
              <span>Buy</span>
              <ArrowForward />
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <Typography className={styles.back} size={TypographySizes.medium} onClick={toPrevStep}>
          <ArrowForward className={styles.icon} />
          <span>Back to shopping cart</span>
        </Typography>
      </div>

      {modalOpen && (
        <Modal className={styles.modal} onClose={onModalSubmit}>
          <CheckIcon className={styles.icon} />
          <Typography
            className={styles.caption}
            size={TypographySizes.large}
            weight={TypographyWeights.semibold}
            color={TypographyColors.white}
          >
            Congrats!
          </Typography>
          <Typography
            className={styles.description}
            size={TypographySizes.large}
            color={TypographyColors.gray}
          >
            Thank you for purchasing. Your order will be shipped in 2-3 working day.
          </Typography>
          <Button color={ButtonColors.white} onClick={onModalSubmit}>
            Done
          </Button>
        </Modal>
      )}
    </div>
  )
}
