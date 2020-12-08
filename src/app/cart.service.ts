import {Injectable} from '@angular/core';
import {Cart} from './cart';
import {CartProduct, Product} from './product';
import {CartMeal, Meal} from './meal';
import {Ingredient} from './ingredient';

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
    const cartProduct = this.productToCartProduct(product);
    this.cart.products.push(cartProduct);
    this.calculatePrice();
    sessionStorage.setItem('cart', JSON.stringify(this.cart));
    this.getAndSetCart();
  }

  duplicateProduct(cartProduct: CartProduct) {
    this.cart.products.push(cartProduct);
    this.calculatePrice();
    sessionStorage.setItem('cart', JSON.stringify(this.cart));
    this.getAndSetCart();
  }

  duplicateMeal(cartMeal: CartMeal) {
    this.cart.meals.push(cartMeal);
    this.calculatePrice();
    sessionStorage.setItem('cart', JSON.stringify(this.cart));
    this.getAndSetCart();
  }

  productToCartProduct(product: Product) {
    const cartProduct = new CartProduct();
    cartProduct.category = product.category;
    cartProduct.description = product.description;
    cartProduct.image = product.image;
    cartProduct.name = product.name;
    cartProduct.id = product.id;
    cartProduct.price = product.price;
    for (const ingredientName of product.removableIngredients.split(', ')) {
      const ingredient = new Ingredient();
      ingredient.name = ingredientName;
      ingredient.removed = false;
      cartProduct.removableIngredients.push(ingredient);
    }
    return cartProduct;
  }

  addMeal(meal: Meal) {
    const cartMeal = new CartMeal();
    cartMeal.price = meal.price;
    cartMeal.name = meal.name;
    cartMeal.image = meal.image;
    cartMeal.description = meal.description;
    for (const product of meal.products) {
      cartMeal.products.push(this.productToCartProduct(product));
    }
    cartMeal.id = meal.id;
    this.cart.meals.push(cartMeal);
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
      });
    }
  }
}
