import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../../core/services/products.services";
import {IProduct} from "../../../core/interfaces/product";

@Component({
  selector: 'app-about',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  title:string = 'Form';
  products: IProduct;
  constructor(private productsService: ProductsService) {

  }

  ngOnInit(): void {
  }

}
