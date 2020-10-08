import {Product} from './product';

export class Cart {
  products?: Product[] = [];
  price = 0;

  constructor() {
    this.price.toPrecision(3);
  }
}
