import {CartProduct, Product} from './product';

export interface Meal {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    products: Product[];
}

export class Meal {
    id = 0;
    name = '';
    price = 0;
    description = '';
    image = '';
    products: Product[] = [];
}

export class CartMeal {
    id = null;
    name = '';
    price = 0;
    description = '';
    image = '';
    products: CartProduct[] = [];
}
