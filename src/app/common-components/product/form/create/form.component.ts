import {Component, Input, OnInit} from '@angular/core';
import {ProductsService} from "../../../../core/services/products.services";
import {ModalService} from "../../../../core/services/modal.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-create',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponentCreate implements OnInit {
  @Input() titleFormButton:string

  constructor(private productsService: ProductsService , private modalService: ModalService) {

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
    this.productsService.createProduct({
      title: this.form.value.title as string,
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic',
      rating: {
        rate: 42,
        count: 1
      }
    }).subscribe(() => {
      this.modalService.close()
    })
  }

}
