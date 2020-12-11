import {Component, OnInit} from '@angular/core';
import {Category} from '../../category';
import {CategoryService} from '../../category.service';
import {CartService} from '../../cart.service';
import {AuthenticationService} from '../../authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  categories: Category[] = [];

  constructor(private categoryService: CategoryService,
              public authenticationService: AuthenticationService,
              public router: Router,
              public cartService: CartService) { }

  ngOnInit() {
    this.getCategories();
    this.cartService.getAndSetCart();
  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe(
      data => {
        this.categories = data;
        console.log(data);
      }
    );
  }

  logout(): void {
    this.authenticationService.logout();
  }

}
