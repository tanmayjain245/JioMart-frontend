import { Component,OnInit } from '@angular/core';
import { OrderVo } from 'src/app/model/Order';
import { OrderDetails} from 'src/app/model/OrderDetails';
import { Product } from 'src/app/model/Product';
import { CartService } from 'src/app/service/cart.service';
import { OrderService } from 'src/app/service/order.service';
import { ProductService } from 'src/app/service/product.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cartlist:any;
  addBtnState : boolean = false;
  count=1;
  total=0;
  // items:Product[];
  
  orderVo:OrderVo=new OrderVo;
  constructor(private productService:ProductService,private orderService:OrderService,private cartService:CartService){
    // this.cartlist = JSON.parse(localStorage.getItem('cartItem'));
  }
  ngOnInit(): void {
    this.cartlist=this.cartService.getItems();
    console.log(this.cartlist)
    this.getPrice();
    
  }
  getPrice(){
    this.total=0
    if(this.cartlist){
      this.cartlist.forEach((element)=>{
        this.total+=element.price;
      });
    }
  }

  deletefromcart(cartItem) {
    console.log(cartItem);
    //this.count = this.count - cartItem.price;
    this.cartService.removefromCart(cartItem);
    // localStorage.setItem('items', JSON.stringify(this.items));
    this.productService.cartlist = this.cartService.getItems();
    this.cartlist=this.productService.cartlist;
    this.getPrice();
  }


  placeOrder(){
    console.log("tj")
    let order: OrderVo=new OrderVo()
    let orderDetails:OrderDetails[]=[]
    order.orderDate=new Date().toISOString().slice(0,10)
    order.shipperID=201
    order.customerID=4
    this.cartlist.forEach(p=>{
      let orderDetail=new OrderDetails()
      orderDetail.productID=p.productID
      orderDetail.quantity=1
      orderDetails.push(orderDetail)
    })
    order.orderDetails=orderDetails
    this.orderService.saveOrder(order).subscribe(res =>{
      console.log(order)
      this.cartlist=[];
      this.cartService.clearCart();
      Swal.fire({
        // position: 'top-end',
        icon: 'success',
        title: 'Order Placed !',
        showConfirmButton: false,
        timer: 1500
      })
    })
  
    
  }

}
