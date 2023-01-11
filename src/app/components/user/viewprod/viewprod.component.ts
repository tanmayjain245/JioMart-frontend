import { Component, OnInit } from '@angular/core';
import { Product, ProductVo } from 'src/app/model/Product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-viewprod',
  templateUrl: './viewprod.component.html',
  styleUrls: ['./viewprod.component.css']
})
export class ViewprodComponent implements OnInit {
  products : Product[];
  productVo : ProductVo = new ProductVo();
  private productService : ProductService;
  constructor(productService : ProductService) { 
    this.productService = productService;
  }
  ngOnInit(): void {
    this.getProducts()
    this.productService.productListModified.subscribe(res => {
      this.getProducts()
    });
    
  }
  getProducts() {
    this.productService.getProducts()
      .subscribe(res => {
        this.products = res;
      });
  }
  addtocart(product){
    let t=false;
    this.productService.cartlist.forEach(element => {
      if(element.productID === product.productID){
        t=true;
      }
    });
    if(!t){
      this.productService.cartlist.push(product)
    localStorage.setItem('cartItem',JSON.stringify(this.productService.cartlist))
    }
    
  }

}
