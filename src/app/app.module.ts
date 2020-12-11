import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './views/header/header.component';
import {HomepageComponent} from './views/homepage/homepage.component';
import {LocationsComponent} from './views/locations/locations.component';
import {CartComponent} from './views/cart/cart.component';
import {CategoryComponent} from './views/category/category.component';
import {ProductComponent} from './views/product/product.component';
import {CheckoutComponent} from './views/checkout/checkout.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MealsComponent} from './views/meals/meals.component';
import {MealComponent} from './views/meals/meal/meal.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MarkerService} from './marker.service';
import {AdSliderComponent} from './views/homepage/ad-slider/ad-slider.component';
import {CardsComponent} from './views/homepage/cards/cards.component';
import {LoginComponent} from './views/login/login.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {RegisterComponent} from './views/register/register.component';
import {AdminComponent} from './views/admin/admin.component';
import {ProfileComponent} from './views/profile/profile.component';
import {JwtInterceptor} from './helpers/jwt.interceptor';
import {ErrorInterceptor} from './helpers/error.interceptor';
import {MealmodComponent} from './views/admin/mealmod/mealmod.component';
import {ProductmodComponent} from './views/admin/productmod/productmod.component';
import {CategorymodComponent} from './views/admin/categorymod/categorymod.component';
import {AdmodComponent} from './views/admin/admod/admod.component';
import {LocationmodComponent} from './views/admin/locationmod/locationmod.component';
import {MatDividerModule} from '@angular/material/divider';
import {CouponComponent} from './views/admin/coupon/coupon.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

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
        MealComponent,
        LoginComponent,
        RegisterComponent,
        AdminComponent,
        ProfileComponent,
    MealmodComponent,
    ProductmodComponent,
    CategorymodComponent,
    AdmodComponent,
    LocationmodComponent,
    CouponComponent
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
        MatToolbarModule,
        ReactiveFormsModule,
        MatDividerModule,
        FontAwesomeModule
    ],
  providers: [
      { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
      { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
      MarkerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
