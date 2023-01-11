export interface Shipper{
    shipperID:number
    shipperName:string
    phone:number
}

export class ShipperVo implements Shipper{
    shipperID:number
    shipperName:string
    phone:number
}