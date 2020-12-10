import {Component, OnInit} from '@angular/core';
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
    productToDelete: Product = new Product();

    constructor(private productService: ProductService, private categoryService: CategoryService) {
    }

    ngOnInit(): void {
        this.productService.getProducts().subscribe(data => {
            this.products = data;
        });
        this.categoryService.getCategories().subscribe(data => {
            this.categories = data;
        });
    }

    addProduct() {
        if (this.fieldsAreFilled()) {
            return this.productService.sendProduct(this.product).subscribe(() => location.reload());
        }
    }

    fieldsAreFilled(): boolean {
        return this.product.description !== ''
            && this.product.name !== ''
            && this.product.price !== 0
            && this.product.category.id !== 0;
    }

    deleteProduct() {
        if (this.productToDelete.id !== 0) {
            return this.productService.deleteProduct(this.productToDelete).subscribe(() => location.reload());
        }
    }

    controlName() {
        if (this.product.name === '') {
            return 'Name is missing';
        }
    }

    controlDescription() {
        if (this.product.description === '') {
            return 'Description is missing';
        }
    }

    controlPrice() {
        if (this.product.price <= 0) {
            return 'Price has to be more than 0';
        }
    }

    controlCategory() {
        if (this.product.category.id === 0) {
            return 'Choose category';
        }
    }

    controlProduct() {
        if (this.productToDelete.id === 0) {
            return 'Choose product';
        }
    }

}
