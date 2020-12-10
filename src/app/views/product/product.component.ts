import {Component, OnInit} from '@angular/core';
import {Product} from '../../product';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ProductService} from '../../product.service';
import {CartService} from '../../cart.service';
import {CommentRequest} from '../../comment';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
    productId;
    product: Product;
    commentToAdd: CommentRequest = new CommentRequest();
    defaultImage = 'https://longsshotokan.com/wp-content/uploads/2017/04/default-image-620x600.jpg';

  constructor(private route: ActivatedRoute,
              private productService: ProductService,
              public cartService: CartService,
              private http: HttpClient,
              private router: Router) { }

    ngOnInit() {
        this.route.paramMap.subscribe((params: ParamMap) => {
            this.productId = params.get('id');
            this.getProduct();
        });
    }

  getProduct() {
    this.productService.getProductById(this.productId).subscribe(
        data => {
          this.product = data;
        }
    );
  }

    addComment() {
        this.productService.addComment(this.productId, this.commentToAdd).subscribe(
            res => {
                this.getProduct();
            },
            err => {
                alert('An error has occurred while sending feedback');
            }
        );
    }
}
