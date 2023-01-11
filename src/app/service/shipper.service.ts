import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Shipper } from "../model/Shipper";

@Injectable({
    providedIn: 'root'
  })
  export class ShipperService {
    private _base = 'http://localhost:9091/api/v1/shipper'
    httpClient: any;
    private _shipperListModified = new Subject<void>();
    constructor(
      httpClient: HttpClient
    ) {
      this.httpClient = httpClient;
    }
  
    get productListModified() {
      return this._shipperListModified;
    }
  
    getShipper(): Observable<Shipper[]> {
      console.log("on getShipper")
      return this.httpClient.get(this._base)
    }
}