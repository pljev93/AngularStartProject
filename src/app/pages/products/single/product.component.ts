import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from '../../../core/services/products.services';


@Component({
  selector: 'app-single',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class SingleProductComponent implements OnInit {
  id: number | null;
  product: any;

  constructor(private route: ActivatedRoute, private productsService: ProductsService) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    this.getDetails();
  }

  getDetails(): void {
    if (!this.id) {
      return
    }
    this.productsService.getProductDetailsApi(this.id).subscribe((data) => {
      this.product = data;
    });

  }
}
