import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductsPageComponent} from './pages/products/products.component';
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
import {SingleProductComponent} from './pages/products/single/product.component';
import {DirectivesModule} from "./core/directives/directives.module";
import {PipesModule} from "./core/pipes/pipes.module";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from "@angular/material/input";
import {MatSortModule} from "@angular/material/sort";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {ModalComponent} from "./common-components/modal/modal.component";
import {FormComponentCreate} from "./common-components/product/form/create/form.component";
import {FormComponentEdit} from "./common-components/product/form/edit/form.component";
import {TableComponent} from "./pages/products/table/table.component";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";


@NgModule({
  declarations: [
    AppComponent,
    ProductsPageComponent,
    AboutComponent,
    NavigationComponent,
    HomePageComponent,
    ProductComponent,
    P404PageComponent,
    SingleProductComponent,
    ModalComponent,
    FormComponentCreate,
    FormComponentEdit,
    TableComponent,
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
    MatInputModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
