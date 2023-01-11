import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShipperComponent } from './components/admin/shipper/shipper.component';
import { CartComponent } from './components/user/cart/cart.component';
import { ProductComponent } from './components/admin/product/product.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderComponent } from './components/admin/order/order.component';
import { ViewprodComponent } from './components/user/viewprod/viewprod.component';
import { CustomerComponent } from './components/admin/customer/customer.component';
import { UserComponent } from './components/user/user.component';
import { AdminComponent } from './components/admin/admin.component';
import { RegistercustomerComponent } from './components/user/registercustomer/registercustomer.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ShipperComponent,
    CartComponent,
    OrderComponent,
    ViewprodComponent,
    CustomerComponent,
    UserComponent,
    AdminComponent,
    RegistercustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
