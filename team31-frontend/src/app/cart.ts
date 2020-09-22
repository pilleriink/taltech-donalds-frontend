import {Product} from "./product";

export class CartProduct {
  quantity: number;
  product: Product;
}

export class Cart {
  products?: CartProduct[] = [];
  price: number = 0;
}
