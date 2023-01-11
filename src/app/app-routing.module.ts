import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/user/cart/cart.component';
import { CustomerComponent } from './components/admin/customer/customer.component';
import { OrderComponent } from './components/admin/order/order.component';
import { ProductComponent } from './components/admin/product/product.component';
import { ShipperComponent } from './components/admin/shipper/shipper.component';
import { ViewprodComponent } from './components/user/viewprod/viewprod.component';
import { RegistercustomerComponent } from './components/user/registercustomer/registercustomer.component';
//import { SupplierComponent } from './components/supplier/supplier.component';
//import { SupplierComponent } from './components/customer/supplier.component';

const routes: Routes = [
  {path : 'viewprod', component: ViewprodComponent},
  {path : 'shippers', component: ShipperComponent},
  {path: 'cart', component: CartComponent},
  {path: 'orders', component: OrderComponent},
  {path: 'product', component: ProductComponent},
  {path: 'customer', component: CustomerComponent},
  {path: 'registercustomer', component: RegistercustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
