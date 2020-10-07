import {Component, OnInit} from '@angular/core';
import {CartService} from '../../cart.service';
import {Ingredient} from '../../ingredient';
import {Order, OrderProduct} from '../../order';
import {MarkerService} from '../../marker.service';
import {Location} from '../../location';
import {OrderService} from '../../order.service';
import {Router} from '@angular/router';

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

    constructor(private cartService: CartService,
                private markerService: MarkerService,
                private orderService: OrderService,
                private router: Router) {}

    ngOnInit() {
        this.markerService.getLocations().subscribe(data => this.locations = data);
        this.order.price = this.cartService.cart.price;
        for (const product of this.cartService.cart.products) {
            this.order.orderProducts.push(new OrderProduct(product.name, product.price, product.removableIngredients.filter(y => y.removed).map(x => x.name).join(", ")));
        }
    }

    sendOrder() {
        if (this.fieldsAreFilled() && !this.buttonPressed) {
            this.buttonPressed = true;
            this.orderService.sendOrder(this.order).subscribe(() => {
                this.cartService.clearProducts();
                this.router.navigate(['/homepage']);
            });
        }
    }

    fieldsAreFilled() {
        return this.order.email !== ''
            && this.order.phoneNumber !== ''
            && this.order.location !== null
            && this.order.price !== 0
            && this.order.orderProducts.length !== 0
            && this.order.email.match("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$") !== null
            && this.order.phoneNumber.length === 8 && this.order.phoneNumber.match("\\b5\\d{7}(?:\\D|$)") !== null;
    }

    controlEmail() {
        if (this.order.email === '') { return 'Insert email!'; }
        if (this.order.email.match("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$") === null) {return 'Incorrect email!'}
    }

    controlPhoneNumber() {
        if (this.order.phoneNumber === '') { return 'Insert phone number!'; }
        if (this.order.phoneNumber.length !== 8 || this.order.phoneNumber.match("\\b5\\d{7}(?:\\D|$)") === null) {return 'Incorrect phone number!'};
    }

    controlLocation() {
        if (this.order.location === null) { return 'Choose pick-up location!'; }
    }
}
