import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import PostcssNestedPlugin from "postcss-nested"
import PostcssHexrgbaPlugin from "postcss-hexrgba"
import AutoprefixerPlugin from "autoprefixer"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: "",
  server: {
    port: 3000,
    open: true,
  },
  css: {
    postcss: {
      plugins: [PostcssNestedPlugin, PostcssHexrgbaPlugin, AutoprefixerPlugin],
    },
  },
})
