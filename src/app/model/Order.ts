import { OrderDetails } from "./OrderDetails"

// export interface Order{
//     orderID:number
//     orderDate: string
//     customer :any
//     shipper : any
//     customerID : number
//     shipperID : number
   
//     orderDetailsVo:orderDetails[]
// }


export class OrderVo{
    productlist:any
    shipper: any
    customer: any
    orderID: number
    orderDetails: OrderDetails[]
    orderDate: any
    customerID: number
    shipperID: number
    
}