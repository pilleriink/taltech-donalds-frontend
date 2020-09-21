import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {ProductService} from "../../product.service";
import {Product} from "../../product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productId;
  product:Product;

  constructor(private route: ActivatedRoute,
              private productService: ProductService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) =>  {
      this.productId = params.get('id');
      this.getProduct();
    });
  }

  getProduct() {
    this.productService.getProductById(this.productId).subscribe(
      data => {
        this.product = data;
        console.log(data);
      }
    )
  }

}
