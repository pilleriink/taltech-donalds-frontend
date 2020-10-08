import {Product} from './product';
import {Ingredient} from './ingredient';

export interface Meal {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    products: Product[];
}
