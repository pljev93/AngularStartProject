import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {BehaviorSubject, delay, Observable, retry, tap} from "rxjs";
import {IProduct} from "../interfaces/product";
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) {
  }
  products: IProduct[] = []
  indexEditProducts: number
  getProductsApi(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(`${environment.apiUrl}/products`, {
          // params: new HttpParams({
          //   fromObject: {limit: 5}
          // })
        }).pipe(
          delay(200),
          retry(2),
          tap(products => this.products = products),

        )
  }

  getProductDetailsApi(id:  number | boolean | undefined): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${environment.apiUrl}/products/${id}`)
  }

  getCategoriesApi(): Observable<string> {
    return this.http.get<string>(`${environment.apiUrl}/products/categories`)
  }

  isProdId$ = new BehaviorSubject<boolean | undefined | number>(false)
  getProductEditId(id: boolean | undefined | number ) {
   return  this.isProdId$.next(id)
  }


  createProduct(product: IProduct): Observable<IProduct> {
    console.log(product)
    return this.http.post<IProduct>(`${environment.apiUrl}/products`, product)
      .pipe(
        tap(prod => this.products.unshift(prod))
      )
  }

  editProduct(product: IProduct , id: number | boolean | undefined): Observable<IProduct> {
    let i=0
    for (i; i<this.products.length; i++) {
      if (this.products[i].id == id) {
        this.indexEditProducts = i
      }
    }

    return this.http.patch<IProduct>(`${environment.apiUrl}/products/${id}`, product)
      .pipe(
        tap(
          prod => this.products.splice(this.indexEditProducts, 1, prod)
           )
      )
  }

}
