import {Component, OnInit} from '@angular/core';
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
    meals: Meal[] = [];
    mealToDelete: Meal = new Meal();

    constructor(private productService: ProductService,
                private mealService: MealService) {
    }

    ngOnInit(): void {
        this.productService.getProducts().subscribe(data => {
            this.products = data;
        });

        this.mealService.getMeals().subscribe(data => {
            this.meals = data;
        });
    }

    addMeal() {
        if (this.fieldsAreFilledMeal()) {
            const products = [];
            for (const product of this.meal.products) {
                const product1 = new Product();
                product1.id = product.id;
                product1.description = product.description;
                product1.image = product.image;
                product1.name = product.name;
                product1.price = product.price;
                product1.removableIngredients = product.removableIngredients;
                product1.comments = product.comments;
                product1.category = product.category;
                product1.meals = product.meals;
                products.push(product1);
            }
            this.meal.products = products;
            console.log(this.meal);
            return this.mealService.sendMeal(this.meal).subscribe(() => location.reload());
        }
    }

    deleteMeal() {
        console.log(this.mealToDelete);
        if (this.mealToDelete.id !== 0) {
            return this.mealService.deleteMeal(this.mealToDelete).subscribe(() => location.reload());
        }
    }

    fieldsAreFilledMeal(): boolean {
        return this.meal.description !== ''
            && this.meal.name !== ''
            && this.meal.price !== 0
            && this.meal.products.length === 3;
    }

    controlName() {
        if (this.meal.name === '') {
            return 'Name is missing';
        }
    }

    controlDescription() {
        if (this.meal.description === '') {
            return 'Description is missing';
        }
    }

    controlPrice() {
        if (this.meal.price <= 0) {
            return 'Price has to be more than 0';
        }
    }

    controlProduct() {
        if (this.meal.products.length < 3) {
            return 'Choose 3 products';
        }
    }

    controlMeal() {
        if (this.mealToDelete.id === 0) {
            return 'Choose meal';
        }
    }

}
