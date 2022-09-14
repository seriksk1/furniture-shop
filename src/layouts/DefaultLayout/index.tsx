import React, { PropsWithChildren } from "react"
import { Outlet } from "react-router-dom"
import { Footer, Header } from "../../containers"
import styles from "./DefaultLayout.module.pcss"

interface DefaultLayoutProps extends PropsWithChildren {
  showHeader?: boolean
  showFooter?: boolean
}

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  showFooter = true,
  showHeader = true,
}) => {
  return (
    <div className={styles.layout}>
      {showHeader && <Header />}
      <Outlet />
      {showFooter && <Footer />}
    </div>
  )
}
