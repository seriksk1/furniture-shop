interface Product {
  image: string
  name: string
  stars: RatingType
  price: string
  discountPrice?: string
  isNew?: boolean
}

type ProductList = Product[]

type RatingType = 0 | 1 | 2 | 3 | 4 | 5
