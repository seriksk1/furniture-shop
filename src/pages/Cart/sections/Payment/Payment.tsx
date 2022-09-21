import React from "react"
import classNames from "classnames"
import styles from "./Payment.module.pcss"
import { ArrowForward, CheckIcon } from "../../../../assets/icons"
import { Button, Modal, PaymentForm } from "../../../../components"
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
      <div className={styles.title}>Payment</div>
      <div className={styles.content}>
        <PaymentForm className={styles.form} />
        <div className={styles.order}>
          <div className={styles.label}>Your Order</div>
          <div className={styles.costs}>
            <div className={styles.row}>
              <div className={styles.name}>Item Cost</div>
              <div className={styles.value}>$420.00</div>
            </div>
            <div className={styles.row}>
              <div className={styles.name}>Delivery</div>
              <div className={styles.value}>Free</div>
            </div>
            <div className={styles.row}>
              <div className={styles.name}>Discount</div>
              <div className={styles.value}>$0</div>
            </div>
            <div className={styles.row}>
              <div className={styles.name}>Promocode</div>
              <div className={styles.value}>$0</div>
            </div>
          </div>
          <div className={styles.total}>
            <div className={styles.name}>Total Price:</div>
            <div className={styles.price}>$420.00</div>
          </div>
          <div className={styles.submit}>
            <Button size="small" onClick={onModalOpen}>
              <span>Buy</span>
              <ArrowForward />
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.back} onClick={toPrevStep}>
          <ArrowForward className={styles.icon} />
          <span>Back to shopping cart</span>
        </div>
      </div>

      {modalOpen && (
        <Modal className={styles.modal} onClose={onModalSubmit}>
          <CheckIcon className={styles.icon} />
          <div className={styles.caption}>Congrats!</div>
          <div className={styles.description}>
            Thank you for purchasing. Your order will be shipped in 2-3 working day.
          </div>
          <Button color="white" size="small" onClick={onModalSubmit}>
            Done
          </Button>
        </Modal>
      )}
    </div>
  )
}
