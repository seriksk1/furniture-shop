import { generatePath } from "react-router"

export const appPaths = {
  home: "/",
  auth: "/auth",
  product: {
    id: "/product/:productId",
    dynamic: function (id: number) {
      return generatePath(this.id, { productId: id })
    },
  },
  cart: "/cart",
  profile: "/profile",
  admin: "/admin",
}
