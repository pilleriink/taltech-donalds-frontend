import {Ingredient} from './ingredient';
import {Category} from './category';
import {Comment} from './comment';
import {Meal} from './meal';


export interface Product {
  id: number;
  price: number;
  name: string;
  description: string;
  removableIngredients: Ingredient[];
  image: string;
  category: Category;
  meals: Meal[];
  comments: Comment[];
}

