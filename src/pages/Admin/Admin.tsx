import React from "react"
import styles from "./Admin.module.pcss"
import { Container, Typography, TypographySizes } from "../../components"
import { AdminSidebar } from "./AdminSidebar/AdminSidebar"
import { adminPanels } from "./data"

export const Admin: React.FC = () => {
  const [currentPanelIndex, setCurrentPanelIndex] = React.useState<number>(0)
  const currentPanel = adminPanels[currentPanelIndex]

  const onPanelChange = (i: number) => {
    setCurrentPanelIndex(i)
  }

  return (
    <div className={styles.page}>
      <Container className={styles.container}>
        <div className={styles.content}>
          <Typography className={styles.title} size={TypographySizes.extraLarge}>
            {currentPanel.text}
          </Typography>
          <AdminSidebar
            list={adminPanels}
            activeIndex={currentPanelIndex}
            onPanelChange={onPanelChange}
          />
          <div className={styles.panel}>{currentPanel.content}</div>
        </div>
      </Container>
    </div>
  )
}
