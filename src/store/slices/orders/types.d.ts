interface Order {
  name: string
  description: string
  image?: string
}

type OrderList = Order[]

//-------- Requests --------//

interface OrderCreateRequest {}
interface OrderUpdateRequest {}
interface OrderDeleteRequest {}
interface OrderGetRequest {}
interface OrdersGetRequest {}

//-------- Responses --------//

interface OrderCreateResponse {}
interface OrderUpdateResponse {}
interface OrderDeleteResponse {}
interface OrderGetResponse {}
interface OrdersGetResponse {}
