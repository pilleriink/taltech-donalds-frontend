import {Component, OnInit} from '@angular/core';
import {CartService} from '../../cart.service';
import {Ingredient} from '../../ingredient';
import {Order, OrderMeal, OrderProduct} from '../../order';
import {MarkerService} from '../../marker.service';
import {Location} from '../../location';
import {OrderService} from '../../order.service';
import {Router} from '@angular/router';
import {CouponService} from '../../coupon.service';
import {Coupon} from '../../coupon';
import {AuthenticationService} from '../../authentication.service';
import {UserService} from '../../user.service';

export interface PeriodicElement {
    name: string;
    image: string;
    position: number;
    price: number;
    removableIngredients: Ingredient[];
}

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
    displayedColumns: string[] = ['position', 'image', 'name', 'removedIngredients', 'price'];
    defaultImage = 'https://longsshotokan.com/wp-content/uploads/2017/04/default-image-620x600.jpg';
    order: Order = new Order();
    locations: Location[];
    buttonPressed = false;
    mealProducts: OrderProduct[];
    coupon: Coupon = new Coupon();
    coupons: Coupon[] = [];


    constructor(public cartService: CartService,
                private markerService: MarkerService,
                private orderService: OrderService,
                private router: Router,
                private couponService: CouponService,
                private authService: AuthenticationService,
                private userService: UserService) {
    }

    ngOnInit() {
        this.markerService.getLocations().subscribe(data => this.locations = data);
        this.couponService.getCoupons().subscribe(data => this.coupons = data);
        this.order.price = this.cartService.cart.price;
        for (const product of this.cartService.cart.products) {
            this.order.orderProducts.push(new OrderProduct(product.name, product.price, product.removableIngredients.filter(y => y.removed).map(x => x.name).join(', ')));
        }
        for (const meal of this.cartService.cart.meals) {
            this.mealProducts = [];
            for (const mealProduct of meal.products) {
                this.mealProducts.push(new OrderProduct(mealProduct.name, mealProduct.price, mealProduct.removableIngredients.filter(y => y.removed).map(x => x.name).join(', ')));
            }
            this.order.orderMeals.push(new OrderMeal(meal.name, meal.price, this.mealProducts));
        }
        const userId = this.authService.currentUserSubject.getValue().id;
        this.userService.getUserById(userId).subscribe(data => this.order.user = data);
    }

    sendOrder() {
        if (this.fieldsAreFilled() && !this.buttonPressed) {
            console.log(this.order);
            this.buttonPressed = true;
            if (this.checkCoupon() && this.coupon.discount !== 0) {
                this.order.price = this.order.price * (this.coupon.discount / 100);
            }
            this.orderService.sendOrder(this.order).subscribe(() => {
                this.cartService.clearProducts();
                this.router.navigate(['/homepage']);
            });
        }
    }

    fieldsAreFilled() {
        return this.order.email !== ''
            && this.order.location !== null
            && this.order.price !== 0
            && this.order.email.match('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$') !== null
            && this.checkCoupon();
    }

    checkCoupon() {
        for (const coupon1 of this.coupons) {
            if (this.coupon.name === coupon1.name) {
                this.coupon = coupon1;
                return true;
            }
        }
        return this.coupon.name === '';
    }

    controlCoupon() {
        if (!this.checkCoupon()) {
            return 'Coupon doesn\'t exist';
        }
    }

    controlEmail() {
        if (this.order.email === '') {
            return 'Insert email!';
        }
        if (this.order.email.match('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$') === null) {
            return 'Incorrect email!';
        }
    }

    controlLocation() {
        if (this.order.location === null) { return 'Choose pick-up location!'; }
    }
}
