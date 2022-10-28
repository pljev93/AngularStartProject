import {Component, Input, OnInit} from '@angular/core';
import {ProductsService} from "../../../../core/services/products.services";
import {ModalService} from "../../../../core/services/modal.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-edit',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponentEdit implements OnInit {
  @Input() titleFormButton:string
  productEdit: any;
  productId : number | boolean | undefined;
  constructor(private productsService: ProductsService , private modalService: ModalService) {
    this.productId = productsService.isProdId$.value
  }
  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6)
    ])
  })

  get title() {
    return this.form.controls.title as FormControl
  }

  ngOnInit(): void {

  }
  submit() {
    this.productsService.editProduct({
      title: this.form.value.title as string,
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic',
      rating: {
        rate: 42,
        count: 1
      }
    } , this.productId).subscribe(() => {
      this.modalService.close()
    })
  }

}
