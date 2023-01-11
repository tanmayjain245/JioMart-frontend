import { Component, OnInit } from '@angular/core';
import { Shipper, ShipperVo } from 'src/app/model/Shipper';
import { ShipperService } from 'src/app/service/shipper.service';

@Component({
  selector: 'app-shipper',
  templateUrl: './shipper.component.html',
  styleUrls: ['./shipper.component.css']
})
export class ShipperComponent implements OnInit {
  shipper : Shipper[];

  shipperVo: ShipperVo=new ShipperVo;
  private shipperService:ShipperService;
  constructor(shipperService:ShipperService){
    this.shipperService=shipperService;
  }


ngOnInit(): void {
  this.getShipper()
  this.shipperService.productListModified.subscribe(res => {
    this.getShipper()
  });
}

getShipper() {
  this.shipperService.getShipper()
    .subscribe(res => {
      this.shipper = res;
    });
}
}
