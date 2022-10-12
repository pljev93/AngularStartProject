import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {IProduct} from "../interfaces/product";
import {environment} from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class  ProductsService {
  constructor(private http : HttpClient ) {
  }

  getAll() : Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${environment.apiUrl}/products`, {
      // params: new  HttpParams({
      //   fromObject: {'limit' : 2}
      // })
    })


  }
  getProductDetails(id: number): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/products/${id}`)
  }

}
