export interface Product{
    productID : number
    productName : string
    unit : number
    price : number
    supplierID : number
    productImg : string
}

export class ProductVo implements Product{
    
    productID: number
    productName: string
    unit: number
    price: number
    supplierID: number
    productImg: string

}