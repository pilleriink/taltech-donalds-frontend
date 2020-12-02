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
    console.log(this.meal);
    if (this.fieldsAreFilledMeal()) {
      this.meal.price = (this.firstProduct.price + this.secondProduct.price + this.thirdProduct.price) * 0.9;
      return this.mealService.sendMeal(this.meal).subscribe();
    }
  }

  deleteMeal() {
    this.mealService.deleteMeal(this.mealToDelete);
  }

  fieldsAreFilledMeal(): boolean {
    return this.meal.description !== ''
        && this.meal.name !== '';
  }

}
