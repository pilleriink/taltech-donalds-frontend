import { Component, OnInit } from '@angular/core';
import {CartService} from '../../cart.service';
import {Ingredient} from '../../ingredient';
import {Product} from '../../product';
import {AuthenticationService} from "../../authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  defaultImage = 'https://longsshotokan.com/wp-content/uploads/2017/04/default-image-620x600.jpg';

  constructor(public cartService: CartService,
              private authenticationService: AuthenticationService,
              private router: Router) {}

  ngOnInit() {
    if (!this.authenticationService.currentUserValue) {
      this.router.navigate(['/homepage']);
    }
  }

  save() {
    sessionStorage.setItem('cart', JSON.stringify(this.cartService.cart));
    console.log(this.cartService);
  }

}
