import { Component, OnInit } from '@angular/core';
import {Product} from '../../../product';
import {Meal} from '../../../meal';
import {ProductService} from '../../../product.service';
import {MealService} from '../../../meal.service';

@Component({
  selector: 'app-mealmod',
  templateUrl: './mealmod.component.html',
  styleUrls: ['./mealmod.component.css']
})
export class MealmodComponent implements OnInit {

  products: Product[] = [];
  meal: Meal = new Meal();
  firstProduct: Product = new Product();
  secondProduct: Product = new Product();
  thirdProduct: Product = new Product();
  meals: Meal[] = [];
  mealToDelete: Meal = new Meal();

  constructor(private productService: ProductService,
              private mealService: MealService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
    this.mealService.getMeals().subscribe(data => {
      this.meals = data;
    });
  }

  addMeal() {
    if (this.fieldsAreFilledMeal()) {
      this.meal.products.push(this.firstProduct);
      this.meal.products.push(this.secondProduct);
      this.meal.products.push(this.thirdProduct);
      console.log(this.meal);
      return this.mealService.sendMeal(this.meal).subscribe();
    }
  }

  deleteMeal() {
    console.log(this.mealToDelete);
    return this.mealService.deleteMeal(this.mealToDelete).subscribe();
  }

  fieldsAreFilledMeal(): boolean {
    return this.meal.description !== ''
        && this.meal.name !== '';
  }

}
