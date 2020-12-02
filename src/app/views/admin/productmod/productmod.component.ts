import { Component, OnInit } from '@angular/core';
import {Product} from '../../../product';
import {Meal} from '../../../meal';
import {ProductService} from '../../../product.service';
import {MealService} from '../../../meal.service';
import {Category} from '../../../category';
import {CategoryService} from '../../../category.service';

@Component({
  selector: 'app-productmod',
  templateUrl: './productmod.component.html',
  styleUrls: ['./productmod.component.css']
})
export class ProductmodComponent implements OnInit {

  product: Product = new Product();
  products: Product[] = [];
  meals: Meal[] = [];
  categories: Category[] = [];

  constructor(private productService: ProductService, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  addProduct() {
    console.log(this.product);
    if (this.fieldsAreFilledMeal()) {
      return this.productService.sendProduct(this.product).subscribe();
    }
  }

  fieldsAreFilledMeal(): boolean {
    return this.product.description !== ''
        && this.product.name !== '';
  }

}
