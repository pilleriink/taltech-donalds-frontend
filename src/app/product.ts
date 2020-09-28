import {Ingredient} from './ingredient';
import {Category} from './category';


export interface Product {
  id: number;
  price: number;
  name: string;
  description: string;
  removableIngredients: Ingredient[];
  image: string;
  category: Category;
}
