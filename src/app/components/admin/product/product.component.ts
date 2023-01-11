import { Component, OnInit } from '@angular/core';
import { Product, ProductVo } from 'src/app/model/Product';
// import { CartService } from 'src/app/service/cart.service';
import { ProductService } from 'src/app/service/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{

  products : Product[];
  addBtnState : boolean = false;
  editBtnState: boolean = false;
  range : number = 0;
  productToUpdate:ProductVo=
  {
    productID:undefined,
    productName:"",
    productImg:"",
    unit:undefined,
    price:undefined,
    supplierID:undefined
  }

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


  saveProduct(){
    // console.log(this.productVo)
    this.changeAddBtnState()
    this.productService.saveProduct(this.productVo)
    .subscribe(res => {
      Swal.fire({
        // position: 'top-end',
        icon: 'success',
        title: 'Product Added',
        showConfirmButton: false,
        timer: 1500
      })
      // alert(res)
    }, 
    (error: any) => {
      console.log(error)
        alert(error.error)
    });
    this.productVo = new ProductVo();
    
  }
  changeAddBtnState() {
    this.addBtnState = !this.addBtnState
  }
  
  changeEditBtnState(){
    this.editBtnState = !this.editBtnState
  }

  deleteProduct(id) {
    this.productService.deleteProduct(id)
      .subscribe(res => {
        Swal.fire({
          // position: 'top-end',
          icon: 'warning',
          title: 'Product Deleted',
          showConfirmButton: false,
          timer: 1500
        })
      })
  }
  editProduct(product){
    this.productToUpdate=product;
    this.productToUpdate.supplierID=product.supplier.supplierID;
  }

  updateProduct() {
    console.log(this.productToUpdate)
    this.productService.updateProduct(this.productToUpdate)
    .subscribe(res => {
      Swal.fire({
        // position: 'top-end',
        icon: 'success',
        title: 'Product Updated !',
        showConfirmButton: false,
        timer: 1500
      })
    })
  }

  setEditProductID(id){
    this.changeEditBtnState()
    this.productVo.productID = id
    

  }

  


}
