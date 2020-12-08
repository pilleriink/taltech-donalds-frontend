import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from './views/homepage/homepage.component';
import {CartComponent} from './views/cart/cart.component';
import {CategoryComponent} from './views/category/category.component';
import {ProductComponent} from './views/product/product.component';
import {LocationsComponent} from './views/locations/locations.component';
import {CheckoutComponent} from './views/checkout/checkout.component';
import {MealsComponent} from './views/meals/meals.component';
import {MealComponent} from './views/meals/meal/meal.component';
import {LoginComponent} from './views/login/login.component';
import {RegisterComponent} from './views/register/register.component';
import {AdminComponent} from './views/admin/admin.component';
import {ProfileComponent} from './views/profile/profile.component';
import {MealmodComponent} from './views/admin/mealmod/mealmod.component';
import {ProductmodComponent} from './views/admin/productmod/productmod.component';
import {CategorymodComponent} from './views/admin/categorymod/categorymod.component';
import {AdmodComponent} from './views/admin/admod/admod.component';
import {LocationmodComponent} from './views/admin/locationmod/locationmod.component';
import {CouponComponent} from './views/admin/coupon/coupon.component';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'cart', component: CartComponent },
  { path: 'categories/:id', component: CategoryComponent },
  { path: 'products/:id', component: ProductComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'meals', component: MealsComponent},
  { path: 'meals/:id', component: MealComponent},
  { path: 'checkout', component: CheckoutComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin/meals', component: MealmodComponent },
  { path: 'admin/products', component: ProductmodComponent },
  { path: 'admin/categories', component: CategorymodComponent },
  { path: 'admin/ads', component: AdmodComponent },
  { path: 'admin/locations', component: LocationmodComponent },
  { path: 'admin/coupons', component: CouponComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent },
  { path:  'register', component: RegisterComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
