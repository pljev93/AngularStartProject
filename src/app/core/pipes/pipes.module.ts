import {NgModule} from '@angular/core';
import {removeSpaces} from './remove-spaces.pipe';


@NgModule({

  declarations: [
    removeSpaces
  ],
  exports: [
    removeSpaces
  ]
})
export class PipesModule {
}
