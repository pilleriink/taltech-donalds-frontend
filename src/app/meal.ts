import {CartProduct, Product} from './product';

export interface Meal {
    id: any;
    name: string;
    price: number;
    description: string;
    image: string;
    products: Product[];
}

export class Meal {
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
