import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductPageComponent} from "./pages/product/product.component";
import {AboutComponent} from "./pages/about/about.component";
import {HomePageComponent} from "./pages/home/home.component";
import {P404PageComponent} from "./pages/p404/p404.component";
import {SingleProductComponent} from "./pages/single-product/single-product.component";

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'product', component: ProductPageComponent},
  {path: 'product/:id', component: SingleProductComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', component: P404PageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
