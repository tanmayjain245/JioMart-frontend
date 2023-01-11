import { Component, OnInit } from '@angular/core';
import { OrderVo } from 'src/app/model/Order';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit{
  order : OrderVo[]=[];
  orderVo: OrderVo=new OrderVo;
  constructor(private orderService:OrderService){
    this.orderService=orderService;
  }


  ngOnInit(): void {
    this.getOrder()
    this.orderService.orderListModified.subscribe(res => {
      this.getOrder()
    });
  }

  getOrder() {
    this.orderService.getOrder()
      .subscribe(res => {
        console.log(res)
        
        // this.order = res;
        this.order=[]
       
        
        res.forEach(r=>{
          let x=[]
          let o=new OrderVo()
          o.orderDate=r.orderDate
          o.customer=r.customer
          o.orderDetails=r.orderDetails
          o.orderID=r.orderID
          o.shipper=r.shipper
          r.orderDetails.forEach(r1=>{
            x.push(r1.product.productName)
          })
          o.productlist=x
          this.order.push(o)

        })
        console.log(this.order)
      });
  }

}
