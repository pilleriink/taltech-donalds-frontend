import {Product} from "./product";

export class CartProduct {
  product: Product;
  quantity: number;
}

export class Cart {
  products?: CartProduct[] = [];
  price: number = 0;
}
