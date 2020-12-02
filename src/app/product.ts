import {Ingredient} from './ingredient';
import {Category} from './category';
import {Comment} from './comment';
import {Meal} from './meal';


export interface Product {
  id: number;
  price: number;
  name: string;
  description: string;
  removableIngredients: string;
  image: string;
  category: Category;
  meals: Meal[];
  comments: Comment[];
}

export class Product {
  price = 0;
  name = '';
  description = '';
  removableIngredients = '';
  image = '';
  category: Category = new Category();
  meals: Meal[] = [];
  comments: Comment[] = [];
}

export class CartProduct {
  id = 0;
  price = 0;
  name = '';
  description = '';
  removableIngredients: Ingredient[] = [];
  image = '';
  category: Category = new Category();
}

