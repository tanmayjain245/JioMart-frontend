export interface Customer{
    customerID :number
    customerName: string
    address: string
    city: string
    postalCode:number
    country: string
}
export class CustomerVo implements Customer{
    customerID: number
    customerName: string
    address: string
    city: string
    postalCode: number
    country: string
}