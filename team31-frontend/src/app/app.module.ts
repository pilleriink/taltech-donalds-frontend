import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './views/header/header.component';
import { HomepageComponent } from './views/homepage/homepage.component';
import { LocationsComponent } from './views/locations/locations.component';
import { CartComponent } from './views/cart/cart.component';
import { BurgersComponent } from './views/burgers/burgers.component';
import { FingerfoodComponent } from './views/fingerfood/fingerfood.component';
import { DrinksComponent } from './views/drinks/drinks.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    LocationsComponent,
    CartComponent,
    BurgersComponent,
    FingerfoodComponent,
    DrinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
