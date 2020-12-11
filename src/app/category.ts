import {Product} from './product';

export interface Category {
  id: number;
  name: string;
  products: Product[];
}

export class Category {
  id = 0;
  name = '';
  products: Product[] = [];
}
