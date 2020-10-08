import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './views/homepage/homepage.component';
import {CartComponent} from './views/cart/cart.component';
import {CategoryComponent} from './views/category/category.component';
import {ProductComponent} from './views/product/product.component';
import {LocationsComponent} from './views/locations/locations.component';
import {CheckoutComponent} from './views/checkout/checkout.component';


const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'cart', component: CartComponent },
  { path: 'categories/:id', component: CategoryComponent },
  { path: 'products/:id', component: ProductComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'checkout', component: CheckoutComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
