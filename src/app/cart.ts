import {CartProduct} from './product';
import {CartMeal} from './meal';

export class Cart {
  products?: CartProduct[] = [];
  meals?: CartMeal[] = [];
  price = 0;

  constructor() {
    this.price.toPrecision(3);
  }
}
