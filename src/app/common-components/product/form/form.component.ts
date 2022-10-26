import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../../core/services/products.services";
import {IProduct} from "../../../core/interfaces/product";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  title:string = 'Form';
  products: IProduct;
  product : boolean | IProduct;
  constructor(private productsService: ProductsService) {
    this.product = productsService.isProdId$.value

  }

  ngOnInit(): void {
    // this.productsService.getProductDetailsApi(20).subscribe((data) => {
    //   this.product = data;
      console.log(this.product)
    // });
  }
  // getafafadsf(): void {
  //   console.log(this.productsService.getProductsEdit())
  //
  // }

}
