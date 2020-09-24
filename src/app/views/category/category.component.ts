import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Category} from "../../category";
import {CategoryService} from "../../category.service";
import {CartService} from "../../cart.service";
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent implements OnInit {
  categoryId;
  category:Category;
  defaultImage = 'https://longsshotokan.com/wp-content/uploads/2017/04/default-image-620x600.jpg';

  constructor(private route: ActivatedRoute,
              private categoryService: CategoryService, private cartService: CartService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) =>  {
      this.categoryId = params.get('id');
      this.getCategory();
    });
  }

  getCategory() {
    this.categoryService.getCategoryById(this.categoryId).subscribe(
      data => {
        this.category = data;
        console.log(data);
      }
    )
  }

}
