import { Injectable } from '@angular/core';
import {Cart, CartProduct} from "./cart";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Cart = new Cart();

  constructor() {
  }

  getAndSetCart() {
    if (sessionStorage.getItem("cart")) {
      this.cart = JSON.parse(sessionStorage.getItem("cart"));
      console.log(this.cart);
    }
  }

  addProduct(product) {
    const newProduct: CartProduct = {
      product: product,
      quantity: 1
    };
    console.log(this.cart.products);
    this.cart.products.push(newProduct);
    this.calculatePrice();
    sessionStorage.setItem("cart", JSON.stringify(this.cart));
  }

  removeProduct(i) {
    this.cart.products.splice(i, 1);
    this.calculatePrice();
    sessionStorage.setItem("cart", JSON.stringify(this.cart));
  }

  calculatePrice() {
    if (this.cart.products) {
      this.cart.price = 0;
      this.cart.products.forEach(cartProduct => {
        this.cart.price += cartProduct.quantity * cartProduct.product.price;
      })
    }
  }

}
