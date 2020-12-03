import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MessageService} from "./message.service";
import {Observable, of} from "rxjs";
import {catchError, tap} from "rxjs/operators";
import {Product} from "./product";
import {environment} from "../environments/environment";
import {Comment} from './comment';
import {Category} from './category';
import {Meal} from './meal';

@Injectable({ providedIn: 'root' })
export class ProductService {

  private productsUrl = 'api/products';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
      private http: HttpClient,
      private messageService: MessageService) { }

  getProductById(id: number): Observable<Product> {
    const url = `${environment.apiUrl}${this.productsUrl}/${id}`;
    return this.http.get<Product>(url).pipe(
        tap(_ => this.log(`fetched product id=${id}`)),
        catchError(this.handleError<Product>(`getProduct id=${id}`))
    );
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.apiUrl + this.productsUrl)
        .pipe(
            tap(_ => this.log('fetched products')),
            catchError(this.handleError<Product[]>('getProducts', []))
        );
  }

  sendProduct(product: Product): Observable<Product> {
    const url = `${environment.apiUrl}${this.productsUrl}`;
    return this.http.post<Product>(url, product, this.httpOptions)
        .pipe(
            catchError(this.handleError('addProduct', product))
        );
  }

  deleteProduct(product: Product): Observable<Product>{
    const url = `${environment.apiUrl}${this.productsUrl}`;
    return this.http.delete<Product>(url + "/" + product.id, this.httpOptions)
        .pipe(catchError(this.handleError('product to delete', product)));
  }

  addComment(productId, comment: Comment): Observable<Comment> {
    const url = `${environment.apiUrl}${this.productsUrl}/${productId}/comments`;
    return this.http.post<Comment>(url, comment)
        .pipe(
            catchError(this.handleError('addComment', comment))
        );
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`ProductService: ${message}`);
  }


}
