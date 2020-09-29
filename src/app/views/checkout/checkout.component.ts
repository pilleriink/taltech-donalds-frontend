import { Component, OnInit } from '@angular/core';
import {CartService} from '../../cart.service';
import {Ingredient} from '../../ingredient';
import {Product} from '../../product';

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

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  sendOrder() {
    this.cartService.clearProducts();
  }

}
