import {NgModule} from '@angular/core';
import {ProductBgCategoryDirective} from "./product-bg-category.directive";


@NgModule({

  declarations: [
    ProductBgCategoryDirective
  ],
  exports: [
    ProductBgCategoryDirective,

  ]
})
export class DirectivesModule {
}
