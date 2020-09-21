import {Category} from "./category";

export interface Product {
  id: number;
  price: number;
  name: string;
  description: string;
  removableIngredients: string;
  image: string;
  category: Category;
}
