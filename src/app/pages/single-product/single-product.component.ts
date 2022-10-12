import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from '../../core/services/products.services';
import {IProduct} from "../../core/interfaces/product";

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {
  id: number | null;
  product: any
  // product: IProduct[] ;
  constructor(private route: ActivatedRoute, private productsService: ProductsService) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

  }

  ngOnInit() {

    this.getDetails();
  }

  getDetails(): void {
    if (!this.id) {
      return
    }
    this.productsService.getProductDetails(this.id).subscribe((data) => {
      this.product = data;
    });

  }
}
