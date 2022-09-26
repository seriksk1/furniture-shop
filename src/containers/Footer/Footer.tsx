import React from "react"
import classNames from "classnames"
import {
  FacebookIcon,
  InstagramIcon,
  LogoIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  YoutubeIcon,
} from "../../assets/icons"
import styles from "./Footer.module.pcss"
import { Typography, TypographySizes, TypographyWeights } from "../../components"

export const Footer: React.FC = () => {
  const classes = classNames(styles.container)

  return (
    <footer className={classes}>
      <div className={styles.wrap}>
        <div className={styles.top}>
          <div className={styles.section}>
            <Typography
              className={styles.title}
              size={TypographySizes.medium}
              weight={TypographyWeights.medium}
            >
              Store Information
            </Typography>
            <Typography className={styles.text}>
              <MapPinIcon className={styles.icon} />
              <span>625 Mante Avenue Suite 512 Borermouth, CO 81655</span>
            </Typography>
            <Typography className={styles.text}>
              <PhoneIcon className={styles.icon} />
              <span>+1.267.669.5513</span>
            </Typography>
            <Typography className={styles.text}>
              <MailIcon className={styles.icon} />
              <span>furniture@gmail.com</span>
            </Typography>
          </div>

          <div className={styles.section}>
            <Typography
              className={styles.title}
              size={TypographySizes.medium}
              weight={TypographyWeights.medium}
            >
              About us
            </Typography>
            <Typography className={styles.link}>Support Center</Typography>
            <Typography className={styles.link}>Customer Support</Typography>
            <Typography className={styles.link}>About Us</Typography>
            <Typography className={styles.link}>Copyright</Typography>
          </div>

          <div className={styles.section}>
            <Typography
              className={styles.title}
              size={TypographySizes.medium}
              weight={TypographyWeights.medium}
            >
              Our information
            </Typography>
            <Typography className={styles.link}>Return Policy</Typography>
            <Typography className={styles.link}>Privacy Policy</Typography>
            <Typography className={styles.link}>Site Map</Typography>
            <Typography className={styles.link}>Store Hours</Typography>
          </div>

          <div className={styles.section}>
            <Typography
              className={styles.title}
              size={TypographySizes.medium}
              weight={TypographyWeights.medium}
            >
              My Account
            </Typography>
            <Typography className={styles.link}>Social media directories</Typography>
            <Typography className={styles.link}>Images & B-roll</Typography>
            <Typography className={styles.link}>Premissions</Typography>
            <Typography className={styles.link}>Speaker requests</Typography>
          </div>

          <div className={styles.section}>
            <Typography
              className={styles.title}
              size={TypographySizes.medium}
              weight={TypographyWeights.medium}
            >
              Policy
            </Typography>
            <Typography className={styles.link}>Application security</Typography>
            <Typography className={styles.link}>Software principles</Typography>
            <Typography className={styles.link}>Unwanted software policy</Typography>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.wrap}>
            <LogoIcon className={styles.logo} />
            <div className={styles.socials}>
              <InstagramIcon className={styles.social} />
              <FacebookIcon className={styles.social} />
              <YoutubeIcon className={styles.social} />
            </div>
            <div className={styles.documents}>
              <Typography className={styles.document}>Help</Typography>
              <Typography className={styles.document}>Privacy</Typography>
              <Typography className={styles.document}>Terms</Typography>
            </div>
          </div>
          <Typography className={styles.text}>Copyright © 2022 Furniture Corporation</Typography>
        </div>
      </div>
    </footer>
  )
}
