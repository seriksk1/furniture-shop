import React from "react"
import { Link } from "react-router-dom"
import {
  AccountCircleOutlined,
  LogoIcon,
  SearchOutlined,
  ShoppingCartFilled,
} from "../../assets/icons"
import { appPaths } from "../../constants"
import styles from "./Header.module.pcss"

export interface NavLink {
  name: string
  path: string
}

export type NavLinkList = NavLink[]

const navigationLinks: NavLinkList = [
  { name: "Home", path: appPaths.home },
  { name: "About Us", path: appPaths.home },
  { name: "Furniture", path: appPaths.product },
  { name: "Blog", path: appPaths.home },
  { name: "Contact Us", path: appPaths.home },
]

export const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <LogoIcon />
      <div className={styles.navbar}>
        {navigationLinks.map(({ name, path }) => (
          <Link to={path} className={styles.link} key={name}>
            {name}
          </Link>
        ))}
      </div>
      <div className={styles.tools}>
        <Link to={appPaths.home}>
          <AccountCircleOutlined className={styles.icon} />
        </Link>
        <Link to={appPaths.cart}>
          <ShoppingCartFilled className={styles.icon} />
        </Link>
        <Link to={appPaths.product}>
          <SearchOutlined className={styles.icon} />
        </Link>
      </div>
    </div>
  )
}
