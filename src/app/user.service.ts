import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {MessageService} from './message.service';
import {Observable} from 'rxjs';
import {User} from './user';
import {UserPassword} from './user-password';


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
        return this.http.post<UserPassword>(`${this.userUrl}/register`, userPassword, this.httpOptions);
    }

    login(userPassword: UserPassword): Observable<User> {
        return this.http.post<User>(`${this.userUrl}/login`, userPassword, this.httpOptions);
    }
}
