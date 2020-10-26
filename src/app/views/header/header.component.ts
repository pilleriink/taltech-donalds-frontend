import { Component, OnInit } from '@angular/core';
import {Category} from "../../category";
import {CategoryService} from "../../category.service";
import {CartService} from "../../cart.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  categories: Category[] = [];

  constructor(private categoryService: CategoryService, public cartService: CartService) { }

  ngOnInit() {
    this.getCategories();
    this.cartService.getAndSetCart();
  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe(
      data => {
        this.categories = data;
        console.log(data);
      }
    );
  }

}
