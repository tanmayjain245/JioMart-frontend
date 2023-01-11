import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import {  OrderVo } from '../model/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private _base = 'http://localhost:9091/api/v1/order'
  httpClient: any;
  cartlist:any=[];
  private _orderListModified = new Subject<void>();

  constructor(httpClient: HttpClient
    ) {
      this.httpClient = httpClient;
    }
    get orderListModified() {
      return this._orderListModified;
    }
  
    getOrder(): Observable<OrderVo[]> {
      console.log("on getOrder")
      return this.httpClient.get(this._base)
    }
  
    saveOrder(order: OrderVo): any {
      console.log(order)
      return this.httpClient.post(this._base,  order , { responseType: 'text' }).pipe(
        tap(() => {
          this._orderListModified.next();
        })
      );
    }
}
