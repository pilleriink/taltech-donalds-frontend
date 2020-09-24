import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './views/header/header.component';
import { HomepageComponent } from './views/homepage/homepage.component';
import { LocationsComponent } from './views/locations/locations.component';
import { CartComponent } from './views/cart/cart.component';
import { CategoryComponent } from './views/category/category.component';
import { ProductComponent } from './views/product/product.component';
import {HttpClientModule} from "@angular/common/http";
import { MarkerService } from "./marker.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    LocationsComponent,
    CartComponent,
    CategoryComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    MarkerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
