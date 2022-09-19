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

export const Footer: React.FC = () => {
  const classes = classNames(styles.container)

  return (
    <footer className={classes}>
      <div className={styles.wrap}>
        <div className={styles.top}>
          <div className={styles.section}>
            <div className={styles.title}>Store Information</div>
            <div className={styles.text}>
              <MapPinIcon className={styles.icon} />
              <span>625 Mante Avenue Suite 512 Borermouth, CO 81655</span>
            </div>
            <div className={styles.text}>
              <PhoneIcon className={styles.icon} />
              <span>+1.267.669.5513</span>
            </div>
            <div className={styles.text}>
              <MailIcon className={styles.icon} />
              <span>furniture@gmail.com</span>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.title}>About us</div>
            <div className={styles.link}>Support Center</div>
            <div className={styles.link}>Customer Support</div>
            <div className={styles.link}>About Us</div>
            <div className={styles.link}>Copyright</div>
          </div>

          <div className={styles.section}>
            <div className={styles.title}>Our information</div>
            <div className={styles.link}>Return Policy</div>
            <div className={styles.link}>Privacy Policy</div>
            <div className={styles.link}>Site Map</div>
            <div className={styles.link}>Store Hours</div>
          </div>

          <div className={styles.section}>
            <div className={styles.title}>My Account</div>
            <div className={styles.link}>Social media directories</div>
            <div className={styles.link}>Images & B-roll</div>
            <div className={styles.link}>Premissions</div>
            <div className={styles.link}>Speaker requests</div>
          </div>

          <div className={styles.section}>
            <div className={styles.title}>Policy</div>
            <div className={styles.link}>Application security</div>
            <div className={styles.link}>Software principles</div>
            <div className={styles.link}>Unwanted software policy</div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.socials}>
            <LogoIcon className={styles.logo} />
            <InstagramIcon className={styles.social} />
            <FacebookIcon className={styles.social} />
            <YoutubeIcon className={styles.social} />
          </div>
          <div className={styles.documents}>
            <div className={styles.document}>Help</div>
            <div className={styles.document}>Privacy</div>
            <div className={styles.document}>Terms</div>
          </div>
          <div className={styles.text}>Copyright © 2022 Furniture Corporation</div>
        </div>
      </div>
    </footer>
  )
}
