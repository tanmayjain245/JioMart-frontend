import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { Product, ProductVo } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _base = 'http://localhost:9091/api/v1/products'
  httpClient: any;
  cartlist:any=[];
  private _productListModified = new Subject<void>();
  constructor(
    httpClient: HttpClient
  ) {
    if(JSON.parse(localStorage.getItem('cartItem'))!= undefined){
      this.cartlist=JSON.parse(localStorage.getItem('cartItem'))
    }
    this.httpClient = httpClient;
  }

  get productListModified() {
    return this._productListModified;
  }

  getProducts(): Observable<Product[]> {
    console.log("on getProducts")
    return this.httpClient.get(this._base)
  }

  saveProduct(product: ProductVo): any {
    console.log([product])
    return this.httpClient.post(this._base,  [product] , { responseType: 'text' }).pipe(
      tap(() => {
        this._productListModified.next();
      })
    );
  }
  deleteProduct(id) {
    return this.httpClient.delete(this._base + '/' + id, { responseType: 'text' }).pipe(
      tap(() => {
        this._productListModified.next();
      })
    );
  }

  updateProduct(product : ProductVo){
    return this.httpClient.put(this._base , [product], {responseType: 'text'}).pipe(
      tap(() => {
        this._productListModified.next();
      })
    );
  }
}
