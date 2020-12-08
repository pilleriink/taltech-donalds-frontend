import {Component, OnInit} from '@angular/core';
import {CartService} from '../../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  defaultImage = 'https://longsshotokan.com/wp-content/uploads/2017/04/default-image-620x600.jpg';

  constructor(public cartService: CartService) {}

  ngOnInit() {
  }

  save() {
    sessionStorage.setItem('cart', JSON.stringify(this.cartService.cart));
    console.log(this.cartService);
  }

}
