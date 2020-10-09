import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule}   from '@angular/forms';
import {MatButtonModule, MatIconModule, MatBadgeModule, MatButtonToggleModule, MatTabsModule, MatCardModule, MatCheckboxModule} from '@angular/material'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './views/header/header.component';
import { HomepageComponent } from './views/homepage/homepage.component';
import { LocationsComponent } from './views/locations/locations.component';
import { CartComponent } from './views/cart/cart.component';
import { CategoryComponent } from './views/category/category.component';
import { ProductComponent } from './views/product/product.component';
import { CheckoutComponent } from './views/checkout/checkout.component';
import {HttpClientModule} from '@angular/common/http';
import { MarkerService } from './marker.service';
import { PopUpService } from './pop-up.service';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {
    MatBadgeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule, MatFormFieldModule,
    MatIconModule, MatInputModule, MatSelectModule, MatTableModule,
    MatTabsModule
} from '@angular/material';
import { MealsComponent } from './views/meals/meals.component';
import { MealComponent } from './views/meals/meal/meal.component';
import {HttpClientModule} from '@angular/common/http';
import { MarkerService } from './marker.service';
import { AdSliderComponent } from './views/homepage/ad-slider/ad-slider.component';
import { CardsComponent } from './views/homepage/cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    LocationsComponent,
    CartComponent,
    CategoryComponent,
    ProductComponent,
    AdSliderComponent,
    CardsComponent,
    ProductComponent,
    CheckoutComponent,
    MealsComponent,
    MealComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatBadgeModule,
        MatButtonToggleModule,
        MatTabsModule,
        MatCheckboxModule,
        FormsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatTableModule,
    ],
  providers: [
    MarkerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
