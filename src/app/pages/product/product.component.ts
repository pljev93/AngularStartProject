import {Component, OnInit} from '@angular/core';
import {IProduct} from "../../core/interfaces/product";
import {products as data} from "../../core/data/product";
import {ProductsService} from "../../core/services/products.services";
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductPageComponent implements OnInit {
  title = 'Product Page'
  limitStart = 3
  limitStartPlus = 3
  details = false
  productsPlus: IProduct[] = data
  products: IProduct[] = []
  loading = false
  product: object
  post: object

  constructor(private productsService: ProductsService, public router: Router) {
  }

  ngOnInit(): void {
    this.loading = true
    this.getProducts();
  }

  showI(id: number) {
    this.router.navigate(['product', id]);
  }

  getProducts(): void {
    this.productsService.getAll().subscribe(products => {
      this.products = products;
      this.loading = false

    })
  }

}
