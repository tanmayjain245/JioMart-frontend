import { Component, OnInit } from '@angular/core';
import { Customer, CustomerVo } from 'src/app/model/Customer';
import { CustomerService } from 'src/app/service/customer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registercustomer',
  templateUrl: './registercustomer.component.html',
  styleUrls: ['./registercustomer.component.css']
})
export class RegistercustomerComponent implements OnInit {
  customer: Customer[]
  addBtnState : boolean = false;
  range : number = 0;

  customerVo:CustomerVo=new CustomerVo();
  private customerService:CustomerService;
  constructor(customerService:CustomerService){
    this.customerService = customerService;
  }
  ngOnInit(): void {
    
    
  }
  saveCustomer(){
    // console.log(this.productVo)
    this.changeAddBtnState()
    this.customerService.saveCustomer(this.customerVo)
    .subscribe(res => {
      Swal.fire({
        // position: 'top-end',
        icon: 'success',
        title: 'User Added !',
        showConfirmButton: false,
        timer: 1500
      })
      // alert(res)
    }, 
    (error: any) => {
      console.log(error)
        alert(error.error)
    });
    this.customerVo = new CustomerVo();
    
  }
  changeAddBtnState() {
    this.addBtnState = !this.addBtnState
  }



}
