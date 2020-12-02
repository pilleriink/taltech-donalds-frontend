import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MessageService} from './message.service';
import {Observable, of} from 'rxjs';
import {Product} from './product';
import {environment} from '../environments/environment';
import {catchError, tap} from 'rxjs/operators';
import {Order} from './order';

@Injectable({ providedIn: 'root' })
export class OrderService {

    private orderUrl = 'api/orders';
    
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(
        private http: HttpClient,
        private messageService: MessageService) { }

    sendOrder(order: Order): Observable<Order> {
        const url = `${environment.apiUrl}${this.orderUrl}`;
        return this.http.post<Order>(url, order, this.httpOptions)
            .pipe(
                catchError(this.handleError('sendOrder', order))
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
        this.messageService.add(`OrderService: ${message}`);
    }


}
