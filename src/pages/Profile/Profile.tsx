import React from "react"
import styles from "./Profile.module.pcss"
import { Button, ButtonTypes } from "../../components"
import { useDispatch } from "react-redux"
import { logout } from "../../store/slices"
import { toast } from "react-toastify"

export const Profile: React.FC = () => {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
    toast.info("Logout")
  }

  return (
    <div className={styles.container}>
      <div className={styles.logout}>
        <Button type={ButtonTypes.outlined} onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </div>
  )
}
