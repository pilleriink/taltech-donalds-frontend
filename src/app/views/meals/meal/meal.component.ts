import { Component, OnInit } from '@angular/core';
import {Product} from '../../../product';
import {CommentRequest} from '../../../comment';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ProductService} from '../../../product.service';
import {CartService} from '../../../cart.service';
import {HttpClient} from '@angular/common/http';
import {Meal} from '../../../meal';
import {MealService} from '../../../meal.service';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {

  mealId;
  meal: Meal;
  defaultImage = 'https://longsshotokan.com/wp-content/uploads/2017/04/default-image-620x600.jpg';

  constructor(private route: ActivatedRoute,
              private productService: ProductService,
              private mealService: MealService,
              private cartService: CartService,
              private http: HttpClient,
              private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) =>  {
      this.mealId = params.get('id');
      this.getMeal();
    });
  }

  getMeal() {
    this.mealService.getMealById(this.mealId).subscribe(
        data => {
          this.meal = data;
          console.log(data);
        }
    );
  }

}