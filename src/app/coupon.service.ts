import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MessageService} from "./message.service";
import {Observable, of} from "rxjs";
import {catchError, tap} from "rxjs/operators";
import {environment} from "../environments/environment";
import {Comment} from './comment';
import {Product} from './product';
import {Coupon} from './coupon';

@Injectable({ providedIn: 'root' })
export class CouponService {

    private couponsUrl = 'api/coupons';

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };

    constructor(
        private http: HttpClient,
        private messageService: MessageService) { }

    getCoupons(): Observable<Coupon[]> {
        return this.http.get<Coupon[]>(environment.apiUrl + this.couponsUrl)
            .pipe(
                tap(_ => this.log('fetched categories')),
                catchError(this.handleError<Coupon[]>('getCoupons', []))
            );
    }

    addCoupon(coupon: Coupon): Observable<Coupon> {
        const url = `${environment.apiUrl}${this.couponsUrl}`;
        return this.http.post<Coupon>(url, coupon, this.httpOptions)
            .pipe(
                catchError(this.handleError('addCoupon', coupon))
            );
    }

    deleteCoupon(coupon: Coupon): Observable<Coupon>{
        const url = `${environment.apiUrl}${this.couponsUrl}`;
        return this.http.delete<Coupon>(url + "/" + coupon.id, this.httpOptions)
            .pipe(catchError(this.handleError('coupon to delete', coupon)));
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
