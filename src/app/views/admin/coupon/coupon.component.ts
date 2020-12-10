import {Component, OnInit} from '@angular/core';
import {Coupon} from '../../../coupon';
import {CouponService} from '../../../coupon.service';

@Component({
    selector: 'app-coupon',
    templateUrl: './coupon.component.html',
    styleUrls: ['./coupon.component.css']
})
export class CouponComponent implements OnInit {
    coupon: Coupon = new Coupon();
    couponToDelete: Coupon = new Coupon();
    coupons: Coupon[] = [];

    constructor(private couponService: CouponService) {
    }

    ngOnInit(): void {
        this.couponService.getCoupons().subscribe(data => {
            this.coupons = data;
        });
    }

    addCoupon() {
        console.log(this.coupon);
        if (this.fieldsAreFilled()) {
            return this.couponService.addCoupon(this.coupon).subscribe(() => location.reload());
        }
    }

    fieldsAreFilled(): boolean {
        return this.coupon.name !== '' && this.coupon.discount > 0;
    }

    deleteCoupon() {
        console.log(this.couponToDelete);
        if (this.couponToDelete.id !== 0) {
            return this.couponService.deleteCoupon(this.couponToDelete).subscribe();
        }
    }

    controlName() {
        if (this.coupon.name === '') {
            return 'Name is missing';
        }
    }

    controlDiscount() {
        if (this.coupon.discount <= 0) {
            return 'Discount has to be bigger than 0';
        }
    }

    controlCoupon() {
        if (this.couponToDelete.id === 0) {
            return 'Choose coupon';
        }
    }


}
