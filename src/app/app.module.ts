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
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {ProductComponent} from "./common-components/product/product.component";
import {HttpClientModule} from "@angular/common/http";
import {P404PageComponent} from './pages/p404/p404.component';
import {SingleProductComponent} from './pages/single-product/single-product.component';
import {DirectivesModule} from "./core/directives/directives.module";
import {PipesModule} from "./core/pipes/pipes.module";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    AboutComponent,
    NavigationComponent,
    HomePageComponent,
    ProductComponent,
    P404PageComponent,
    SingleProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatFormFieldModule,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DirectivesModule,
    PipesModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatIconModule,
    FormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
