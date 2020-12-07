import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {MessageService} from './message.service';
import {Observable, of} from 'rxjs';
import {User} from './user';
import {UserPassword} from './user-password';
import {environment} from '../environments/environment';
import {catchError, tap} from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class UserService {

    private userUrl = 'api/users';  // URL to web api

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(
        private http: HttpClient,
        private messageService: MessageService) { }

    register(userPassword: UserPassword): Observable<any> {
        const url = `${environment.apiUrl}${this.userUrl}`;
        return this.http.post<UserPassword>(`${url}/register`, userPassword, this.httpOptions);
    }

    getUserById(id: number): Observable<User> {
        const url = `${environment.apiUrl}${this.userUrl}/${id}`;
        return this.http.get<User>(url)
            .pipe(
                tap(_ => this.log('fetched user')),
                catchError(this.handleError<User>('getUser', ))
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


    login(userPassword: UserPassword): Observable<User> {
        const url = `${environment.apiUrl}${this.userUrl}`;
        return this.http.post<User>(`${url}/login`, userPassword, this.httpOptions);
    }
}
