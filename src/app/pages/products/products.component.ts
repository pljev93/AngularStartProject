import {Component, OnInit} from '@angular/core';
import {IProduct} from "../../core/interfaces/product";
import {products as data} from "../../core/data/product";
import {ProductsService} from "../../core/services/products.services";
import {animate, style, transition, trigger} from "@angular/animations";
import {debounceTime,  Subject} from "rxjs";

@Component({
  selector: 'app-product-page',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
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

export class ProductsPageComponent implements OnInit {
  title = 'Products Page';
  productsPlus: IProduct[] = data;
  products: IProduct[] = [];
  product: object;
  numberShowedProducts = 3;
  numberAddShowedProducts = 3;
  sortProductsAscDesc = true;
  loadingProducts = false;
  categoriesProducts: string;
  valueSelectedPageProducts: string;
  searchProducts: string;
  strSearchProducts: string = "";
  private subjectSearchProducts = new Subject<string>();

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.getProducts(this.strSearchProducts , this.sortProductsAscDesc);
    this.getTitleCategories();
    this.subjectSearchProducts.pipe(debounceTime(1000)).subscribe((searchText) => {
      this.getProducts(searchText, this.sortProductsAscDesc);
    })
    this.loadingProducts = true;
  }

  sort(sortProductsAscDesc: boolean): void {
    this.getProducts(this.strSearchProducts , sortProductsAscDesc);
  }
  getStrSearchProducts(str: string): void {
    this.strSearchProducts = str;
    this.subjectSearchProducts.next(str);
  }

  getProducts(searchText:string , sortProductsAscDesc: boolean): void {
    this.productsService.getProductsApi().subscribe(products => {

      this.products = products;
      if (this.valueSelectedPageProducts && this.valueSelectedPageProducts !== 'all') {
        for (let i = this.products.length; i--; ) {
          if (  this.products[i].category !== this.valueSelectedPageProducts) {
            this.products.splice(i, 1);
          }
        }
      }
      this.loadingProducts = false;
      this.numberShowedProducts = 3;
      this.sortProductsAscDesc = !this.sortProductsAscDesc;
      this.products = this.products.slice().sort((a, b) => {
        return compare(a.title, b.title, sortProductsAscDesc);
      });

      if(!searchText){
        return this.products;
      }

      var result: IProduct[] = [];

      searchText = searchText.toLowerCase();

      this.products.forEach(function(products) {
        if(products.title.toLowerCase().indexOf(searchText) !== -1){
          result.push(products);
        }
      });
      return this.products = result;

    })
  }
  getTitleCategories(): void {
    this.productsService.getCategoriesApi().subscribe(categories => {
      this.categoriesProducts = categories;

    })
  }

}
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
