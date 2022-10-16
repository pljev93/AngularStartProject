import {Component, OnInit} from '@angular/core';
import {IProduct} from "../../core/interfaces/product";
import {products as data} from "../../core/data/product";
import {ProductsService} from "../../core/services/products.services";
import {animate, style, transition, trigger} from "@angular/animations";
import {debounceTime,  Subject} from "rxjs";

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
  AscDesc = true
  productsPlus: IProduct[] = data
  products: IProduct[] = []
  loading = false
  product: object
  post: object
  categories: string
  selected: 'all'
  show: 'all'
  search: string
  searchStr: string = "";
  private searchSubject = new Subject<string>()
  sortedData: IProduct[]
  constructor(private productsService: ProductsService) {
    this.sortedData = this.products.slice();
  }

  ngOnInit(): void {
    this.loading = true
    this.getProducts(this.searchStr , this.AscDesc);
    this.getCat()
    this.searchSubject.pipe(debounceTime(1000)).subscribe((searchText) => {
      this.getProducts(searchText, this.AscDesc);
    })
  }

  sort(AscDesc: boolean): void {
    this.getProducts(this.searchStr , AscDesc);
  }
   modelChange(str: string): void {
     this.searchStr = str
     this.searchSubject.next(str)
  }

  getProducts(searchText:string , AscDesc: boolean): void {
    this.productsService.getAll(this.selected == undefined ? 'all':this.selected).subscribe(products => {
      this.products = products;
      this.loading = false
      this.limitStart = 3
      this.products = this.products.slice().sort((a, b) => {
          return compare(a.title, b.title, AscDesc);
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
  getCat(): void {
    this.productsService.getCategories().subscribe(categories => {
      this.categories = categories;

    })
  }

}
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
