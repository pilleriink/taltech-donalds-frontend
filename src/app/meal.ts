import {Product} from './product';

export interface Meal {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    products: Product[];
}
