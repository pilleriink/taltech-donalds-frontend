import {Ingredient} from './ingredient';
import {Category} from './category';
import {Comment} from './comment';


export interface Product {
  id: number;
  price: number;
  name: string;
  description: string;
  removableIngredients: Ingredient[];
  image: string;
  category: Category;
  comments: Comment[];
}

