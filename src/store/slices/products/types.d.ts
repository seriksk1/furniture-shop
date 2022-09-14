interface Product {
  image: string
  name: string
  stars: RatingType
  price: string
}

type RatingType = 0 | 1 | 2 | 3 | 4 | 5
