import React from "react"
import { Link } from "react-router-dom"
import {
  AccountCircleOutlined,
  LogoIcon,
  MenuIcon,
  SearchOutlined,
  ShoppingCartFilled,
} from "../../assets/icons"
import { Container, Typography, TypographySizes } from "../../components"
import { appPaths } from "../../constants"
import { useWidthBreakpoint } from "../../hooks"
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
  const isMobileDevice = useWidthBreakpoint()

  return (
    <Container className={styles.header}>
      {isMobileDevice && <MenuIcon className={styles.menuIcon} />}

      <LogoIcon className={styles.logo} />

      {!isMobileDevice && (
        <div className={styles.navbar}>
          {navigationLinks.map(({ name, path }) => (
            <Typography key={name} className={styles.link} size={TypographySizes.medium}>
              <Link to={path}>{name}</Link>
            </Typography>
          ))}
        </div>
      )}

      <div className={styles.tools}>
        {!isMobileDevice && (
          <Link to={appPaths.profile}>
            <AccountCircleOutlined className={styles.icon} />
          </Link>
        )}
        <Link to={appPaths.cart}>
          <ShoppingCartFilled className={styles.icon} />
        </Link>
        {!isMobileDevice && (
          <Link to={appPaths.admin}>
            <SearchOutlined className={styles.icon} />
          </Link>
        )}
      </div>
    </Container>
  )
}
