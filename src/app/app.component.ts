import {Component, OnInit} from '@angular/core';
import {IProduct} from './core/interfaces/product';
import {products as data} from './core/data/product'
import {ProductsService} from "./core/services/products.services";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AngularStart'


  ngOnInit(): void {


  }


}

