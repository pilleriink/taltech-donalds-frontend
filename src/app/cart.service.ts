import { Injectable } from '@angular/core';
import {Cart} from './cart';
import {Product} from './product';
import {Meal} from './meal';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Cart = new Cart();

  constructor() {
  }

  getAndSetCart() {
    if (sessionStorage.getItem('cart')) {
      this.cart = JSON.parse(sessionStorage.getItem('cart'));
    }
  }

  addProduct(product: Product) {
    this.cart.products.push(product);
    this.calculatePrice();
    sessionStorage.setItem('cart', JSON.stringify(this.cart));
    this.getAndSetCart();
  }

  addMeal(meal: Meal) {
    this.cart.meals.push(meal);
    this.calculatePrice();
    sessionStorage.setItem('cart', JSON.stringify(this.cart));
    this.getAndSetCart();
  }

  removeProduct(i) {
    this.cart.products.splice(i, 1);
    this.calculatePrice();
    sessionStorage.setItem('cart', JSON.stringify(this.cart));
    this.getAndSetCart();
  }

  removeMeal(j) {
    this.cart.meals.splice(j, 1);
    this.calculatePrice();
    sessionStorage.setItem('cart', JSON.stringify(this.cart));
    this.getAndSetCart();
  }

  clearProducts() {
    this.cart = new Cart();
    sessionStorage.setItem('cart', JSON.stringify(this.cart));
  }

  calculatePrice() {
    if (this.cart.products) {
      this.cart.price = 0;
      this.cart.products.forEach(cartProduct => {
        this.cart.price += cartProduct.price;
      });
      this.cart.meals.forEach(cartMeal => {
        this.cart.price += cartMeal.price;
      })
    }
  }
}
