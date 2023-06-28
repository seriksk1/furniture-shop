interface Product {
  id: number
  image: string
  name: string
  description?: string
  stars: RatingType
  price: number
  discountPrice?: number
  isNew?: boolean
}

type ProductList = Product[]

type RatingType = 0 | 1 | 2 | 3 | 4 | 5

//-------- Requests --------//

interface ProductCreateRequest {}
interface ProductUpdateRequest {}
interface ProductDeleteRequest {}
interface ProductGetRequest {}
interface ProductsGetRequest {}

//-------- Responses --------//

interface ProductCreateResponse {}
interface ProductUpdateResponse {}
interface ProductDeleteResponse {}
interface ProductGetResponse extends Product {}
interface ProductsGetResponse {}
