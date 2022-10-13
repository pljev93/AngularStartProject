import {Component, OnInit} from '@angular/core';
import {IProduct} from "../../core/interfaces/product";
import {products as data} from "../../core/data/product";
import {ProductsService} from "../../core/services/products.services";
import {Router} from '@angular/router';
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-product-page',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  animations: [
    trigger('animationProducts', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('0.6s', style({ opacity: 1 })),
      ]),
      transition('* => void', [
        animate('0.6s', style({ opacity: 0 })),
      ]),
    ]),
  ],
})

export class ProductPageComponent implements OnInit {
  value: string
  title = 'Product Page'
  limitStart = 3
  limitStartPlus = 3
  details = false
  productsPlus: IProduct[] = data
  products: IProduct[] = []
  loading = false
  product: object
  post: object
  categories: string
  selected: 'all'
  show: 'all'

  constructor(private productsService: ProductsService, public router: Router) {
  }

  ngOnInit(): void {
    this.loading = true
    this.getProducts();
    this.getCat();

  }

  showI(id: number) {
    this.router.navigate(['product', id]);

  }

  getProducts(): void {
    this.productsService.getAll(this.selected == undefined ? 'all':this.selected).subscribe(products => {
      this.products = products;
      this.loading = false
      this.limitStart = 3
    })
  }
  getCat(): void {
    this.productsService.getCategories().subscribe(categories => {
      this.categories = categories;

    })
  }

}
