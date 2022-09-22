import React from "react"

export const useMobileDevice = () => {
  const [width, setWidth] = React.useState<number>(window.innerWidth)

  React.useEffect(() => {
    function handleWindowSizeChange() {
      if (window.innerWidth !== width) {
        setWidth(window.innerWidth)
      }
    }

    window.addEventListener("resize", handleWindowSizeChange)

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange)
    }
  }, [width])

  return width <= 1024
}
