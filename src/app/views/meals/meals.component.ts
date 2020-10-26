import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Meal} from '../../meal';
import {MealService} from '../../meal.service';
import {CartService} from '../../cart.service';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit {

  meals: Meal[] = [];
  defaultImage = 'https://longsshotokan.com/wp-content/uploads/2017/04/default-image-620x600.jpg';

  constructor(private route: ActivatedRoute, private mealService: MealService, public cartService: CartService) { }

  ngOnInit() {
    this.mealService.getMeals().subscribe(
        data => {
          this.meals = data;
          console.log(data);
        }
    );
  }

}
