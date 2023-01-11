import { Injectable } from '@angular/core';
import { Product } from '../model/Product';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // items: Product[]=[];

  constructor(private productService:ProductService) { 
    // if(JSON.parse(localStorage.getItem('cartItem'))==undefined){
    //   this.items=JSON.parse(localStorage.getItem('cartItem'));
    // }
    
  }
  getItems() {
    // console.log(this.items);
    return JSON.parse(localStorage.getItem('cartItem'));
  }
  removefromCart(cartItem: Product) {
    if (this.productService.cartlist != undefined) {
    this.productService.cartlist = this.productService.cartlist.filter(
      itm => itm.productID != cartItem.productID
    );
    localStorage.setItem('cartItem', JSON.stringify(this.productService.cartlist));
    }
    
  }
  clearCart() {
    this.productService.cartlist = []
    localStorage.setItem("cartItem", JSON.stringify(this.productService.cartlist))
    // this.cartModifiedSubject.next(this.productService.cartlist);
  }
}
