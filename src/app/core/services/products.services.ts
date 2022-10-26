import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {IProduct} from "../interfaces/product";
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) {
  }

  getProductsApi(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(`${environment.apiUrl}/products`)
  }

  getProductDetailsApi(id: number): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${environment.apiUrl}/products/${id}`)
  }

  getCategoriesApi(): Observable<string> {
    return this.http.get<string>(`${environment.apiUrl}/products/categories`)
  }
  isProdId$ = new BehaviorSubject<boolean | IProduct>(false)

  getProductEdit(id: IProduct) {

   // return   this.isProdId$ = id;
    console.log(id)
    this.isProdId$.next(id)

  }


}
