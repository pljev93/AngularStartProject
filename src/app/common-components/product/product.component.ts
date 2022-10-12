import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from "../../core/interfaces/product";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent  {

  @Input() product : IProduct;
  details = false;

}

