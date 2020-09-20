import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from "./views/homepage/homepage.component";
import {LocationsComponent} from "./views/locations/locations.component";
import {CartComponent} from "./views/cart/cart.component";
import {BurgersComponent} from "./views/burgers/burgers.component";
import {FingerfoodComponent} from "./views/fingerfood/fingerfood.component";
import {DrinksComponent} from "./views/drinks/drinks.component";


const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'cart', component: CartComponent },
  { path: 'burgers', component: BurgersComponent },
  { path: 'fingerfood', component: FingerfoodComponent },
  { path: 'drinks', component: DrinksComponent },
  { path: 'locations', component: LocationsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
