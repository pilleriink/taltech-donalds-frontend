import {CartProduct, Product} from './product';
import {CartMeal, Meal} from './meal';

export class Cart {
  products?: CartProduct[] = [];
  meals?: CartMeal[] = [];
  price = 0;

  constructor() {
    this.price.toPrecision(3);
  }
}
