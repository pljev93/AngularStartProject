import {Component, Input} from '@angular/core';
import {IProduct} from "../../core/interfaces/product";
import {Router} from "@angular/router";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent  {

  @Input() product : IProduct;
  detailsProducts = false;
  constructor( public router: Router) {
  }
  showSinglePageProduct(id: number) {
    this.router.navigate(['product', id]);

  }
}

