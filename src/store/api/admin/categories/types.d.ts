interface Category {
  name: string
  image?: string
  productsAmount: number
}

type CategoryList = Category[]

//-------- Requests --------//

interface CategoryCreateRequest {}
interface CategoryUpdateRequest {}
interface CategoryDeleteRequest {}
interface CategoryGetRequest {}
interface CategoriesGetRequest {}

//-------- Responses --------//

interface CategoryCreateResponse {}
interface CategoryUpdateResponse {}
interface CategoryDeleteResponse {}
interface CategoryGetResponse {}
interface CategoriesGetResponse {}
