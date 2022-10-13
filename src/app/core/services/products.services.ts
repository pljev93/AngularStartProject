import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IProduct} from "../interfaces/product";
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) {
  }

  getAll(show: string): Observable<IProduct[]> {
    switch (show) {
      case 'all':
        return this.http.get<IProduct[]>(`${environment.apiUrl}/products`)

      default:
        return this.http.get<IProduct[]>(`${environment.apiUrl}/products/category/${show}`)

    }
  }

  getProductDetails(id: number): Observable<string> {
    return this.http.get<any>(`${environment.apiUrl}/products/${id}`)
  }

  getCategories(): Observable<string> {
    return this.http.get<any>(`${environment.apiUrl}/products/categories`)
  }
}
