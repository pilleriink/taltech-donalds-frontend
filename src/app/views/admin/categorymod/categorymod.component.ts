import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../../category.service';
import {Category} from '../../../category';

@Component({
  selector: 'app-categorymod',
  templateUrl: './categorymod.component.html',
  styleUrls: ['./categorymod.component.css']
})
export class CategorymodComponent implements OnInit {

  category = new Category();

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
  }

  addCategory() {
    console.log(this.category);
    if (this.fieldsAreFilledMeal()) {
      return this.categoryService.addCategory(this.category).subscribe();
    }
  }

  fieldsAreFilledMeal(): boolean {
    return this.category.name !== '';
  }

}
