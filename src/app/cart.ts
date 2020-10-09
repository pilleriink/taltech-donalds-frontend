import {Product} from './product';
import {Meal} from './meal';

export class Cart {
  products?: Product[] = [];
  meals?: Meal[] = [];
  price = 0;

  constructor() {
    this.price.toPrecision(3);
  }
}
