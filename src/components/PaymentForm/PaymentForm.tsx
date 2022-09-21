import React from "react"
import classNames from "classnames"
import styles from "./PaymentForm.module.pcss"
import { Checkbox, InputField } from "../UI"
import { SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { paymentFormSchema } from "./payment-form.validation"

interface PaymentFormProps {
  className?: string
}

interface IPaymentFormInput {
  email: string
  firstName: string
  lastName: string
  city: string
  postCode: string
  address: string
  phone: string

  cardNumber: string
  expirationMonth: string
  expirationYear: string
  cvvCode: number
  postalCode: number
}

export const PaymentForm: React.FC<PaymentFormProps> = ({ className }) => {
  const classes = classNames(styles.container, className)
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<IPaymentFormInput>({
    resolver: yupResolver(paymentFormSchema),
  })

  const onSubmit: SubmitHandler<IPaymentFormInput> = (value) => {
    console.log(value)
  }

  const onRegister = (name: any) => {
    return { ...register(name) }
  }

  return (
    <form className={classes} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.section}>
        <div className={styles.label}>Contact information</div>
        <InputField
          className={styles.input}
          type="email"
          placeholder="Email"
          register={onRegister("email")}
          error={errors?.email?.message}
        />
      </div>
      <div className={styles.section}>
        <div className={styles.label}>Shipping address</div>
        <div className={styles.row}>
          <InputField
            className={styles.input}
            placeholder="First Name"
            register={onRegister("firstName")}
            error={errors?.firstName?.message}
          />
          <InputField
            className={styles.input}
            placeholder="Last Name"
            register={onRegister("lastName")}
            error={errors?.lastName?.message}
          />
        </div>
        <div className={styles.row}>
          <InputField
            className={styles.input}
            placeholder="City"
            register={onRegister("city")}
            error={errors?.city?.message}
          />
          <InputField
            className={styles.input}
            placeholder="Post Code"
            register={onRegister("email")}
            error={errors?.postCode?.message}
          />
        </div>
        <InputField
          className={styles.input}
          placeholder="Address"
          register={onRegister("address")}
          error={errors?.address?.message}
        />
        <InputField
          className={styles.input}
          type="tel"
          placeholder="Phone Number"
          register={onRegister("phone")}
          error={errors?.phone?.message}
        />
      </div>
      <div className={styles.section}>
        <div className={styles.label}>Payment method</div>
        <div className={styles.paymentType}>
          <Checkbox className={styles.checkbox} checked={false}>
            Cash
          </Checkbox>
          <Checkbox className={styles.checkbox} checked={true}>
            Card
          </Checkbox>
          <Checkbox className={styles.checkbox} checked={false}>
            PayPal
          </Checkbox>
        </div>
        <InputField
          className={styles.input}
          placeholder="Card Number"
          register={onRegister("cardNumber")}
          error={errors?.cardNumber?.message}
        />
        <div className={styles.row}>
          <InputField
            className={styles.input}
            placeholder="Expiration Month"
            register={onRegister("expirationMonth")}
            error={errors?.expirationMonth?.message}
          />
          <InputField
            className={styles.input}
            placeholder="Expiration Year"
            register={onRegister("expirationYear")}
            error={errors?.expirationYear?.message}
          />
        </div>
        <div className={styles.row}>
          <InputField
            className={styles.input}
            type="password"
            placeholder="CVV"
            register={onRegister("cvvCode")}
            error={errors?.cvvCode?.message}
          />
          <InputField
            className={styles.input}
            placeholder="Postal Code"
            register={onRegister("postalCode")}
            error={errors?.postalCode?.message}
          />
        </div>
      </div>
    </form>
  )
}
