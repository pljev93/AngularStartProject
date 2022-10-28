import {Injectable} from '@angular/core'
import {BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  isVisibleEditProduct$ = new BehaviorSubject<boolean>(false)
  isVisibleCreatProduct$ = new BehaviorSubject<boolean>(false)

  openEditProduct() {
    this.isVisibleEditProduct$.next(true)

  }

  close() {
    this.isVisibleEditProduct$.next(false)
    this.isVisibleCreatProduct$.next(false)
  }
  openCreatProduct() {
    this.isVisibleCreatProduct$.next(true)

  }


}
