import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MessageService} from './message.service';
import {Observable, of} from 'rxjs';
import {environment} from '../environments/environment';
import {catchError, tap} from 'rxjs/operators';
import {Meal} from './meal';
import {Product} from './product';

@Injectable({ providedIn: 'root' })
export class MealService {

    private mealsUrl = 'api/meals';

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };

    constructor(
        private http: HttpClient,
        private messageService: MessageService) { }

    getMeals(): Observable<Meal[]> {
        return this.http.get<Meal[]>(environment.apiUrl + this.mealsUrl)
            .pipe(
                tap(_ => this.log('fetched categories')),
                catchError(this.handleError<Meal[]>('getMeals', []))
            );
    }

    getMealById(id: number): Observable<Meal> {
        const url = `${environment.apiUrl}${this.mealsUrl}/${id}`;
        return this.http.get<Meal>(url).pipe(
            tap(_ => this.log(`fetched product id=${id}`)),
            catchError(this.handleError<Meal>(`getMeal id=${id}`))
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
        this.messageService.add(`MealService: ${message}`);
    }


}
