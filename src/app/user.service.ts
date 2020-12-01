import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {MessageService} from './message.service';
import {Observable} from 'rxjs';
import {User} from './user';
import {UserPassword} from './user-password';
import {environment} from '../environments/environment';
import {Product} from './product';
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

    login(userPassword: UserPassword): Observable<User> {
        const url = `${environment.apiUrl}${this.userUrl}`;
        return this.http.post<User>(`${url}/login`, userPassword, this.httpOptions);
    }
}
