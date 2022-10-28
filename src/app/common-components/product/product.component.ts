import {Component, Input} from '@angular/core';
import {IProduct} from "../../core/interfaces/product";
import {Router} from "@angular/router";
import {ProductsService} from "../../core/services/products.services";
import {ModalService} from "../../core/services/modal.service";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent  {

  @Input() product : IProduct;
  detailsProducts = false;

  constructor(
    public router: Router,
    public modalService: ModalService,
    public productsService: ProductsService
  ) {
  }
  showSinglePageProduct(id: number | undefined) {
    this.router.navigate(['product', id]);
  }

}

