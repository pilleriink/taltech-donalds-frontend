import {Category} from "./category";
import {Ingredient} from "./ingredient";

export interface Product {
  id: number;
  price: number;
  name: string;
  description: string;
  removableIngredients: Ingredient[];
  image: string;
  category: Category;
}
