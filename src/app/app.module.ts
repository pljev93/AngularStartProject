import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductPageComponent} from './pages/product/product.component';
import {AboutComponent} from './pages/about/about.component';
import {NavigationComponent} from './common-components/navigation/navigation.component';
import {HomePageComponent} from './pages/home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {ProductComponent} from "./common-components/product/product.component";
import {HttpClientModule} from "@angular/common/http";
import {P404PageComponent} from './pages/p404/p404.component';
import {SingleProductComponent} from './pages/single-product/single-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    AboutComponent,
    NavigationComponent,
    HomePageComponent,
    ProductComponent,
    P404PageComponent,
    SingleProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
