import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { Customer, CustomerVo } from '../model/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private _base = 'http://localhost:9091/api/v1/customer'
  httpClient: any;
  cartlist:any=[];
  private _customerListModified = new Subject<void>();

  constructor(httpClient: HttpClient)
  {
    this.httpClient = httpClient;
  }
  get customerListModified() {
    return this._customerListModified;
  }

  getCustomer(): Observable<Customer[]> {
    console.log("on getCustomer")
    return this.httpClient.get(this._base)
  }

  saveCustomer(customer: CustomerVo): any {
    console.log([customer])
    return this.httpClient.post(this._base,  [customer] , { responseType: 'text' }).pipe(
      tap(() => {
        this._customerListModified.next();
      })
    );
  }

}
