interface CartItem extends Product {
  quantity: number
}

interface ICartState {
  list: CartItem[]
}
