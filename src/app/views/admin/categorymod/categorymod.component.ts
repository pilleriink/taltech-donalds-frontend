import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../../category.service';
import {Category} from '../../../category';

@Component({
  selector: 'app-categorymod',
  templateUrl: './categorymod.component.html',
  styleUrls: ['./categorymod.component.css']
})
export class CategorymodComponent implements OnInit {

  category = new Category();
  categories: Category[] = [];
  categoryToDelete = new Category();

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  addCategory() {
    console.log(this.category);
    if (this.fieldsAreFilledMeal()) {
      return this.categoryService.addCategory(this.category).subscribe(() => location.reload());
    }
  }

  fieldsAreFilledMeal(): boolean {
    return this.category.name !== '';
  }

  deleteCategory() {
    console.log(this.categoryToDelete);
    return this.categoryService.deleteCategory(this.categoryToDelete).subscribe();
  }

}
