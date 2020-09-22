import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Category} from "../../category";
import {CategoryService} from "../../category.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  categories: Category[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.getCategories();
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
