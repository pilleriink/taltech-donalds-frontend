import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {AuthenticationService} from '../authentication.service';
import {catchError} from 'rxjs/operators';
import {Route, Router} from '@angular/router';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(private authenticationService: AuthenticationService, private router: Router) {
    }


    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        console.log('asddasdas');
        const currentUser = this.authenticationService.currentUserValue;
        console.log(currentUser);
        if (currentUser && currentUser.token) {
            // add token for all the requests
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
        }
        return next.handle(request).pipe(
            catchError((error, caught) => {
                this.handleAuthError(error);
                return of(error);
            }) as any);
    }

    private handleAuthError(err: HttpErrorResponse): Observable<any> {
        if (err.status === 401) {
            this.authenticationService.logout();
            this.router.navigate([`/login`]);
            return of(err.message);
        }
        throw err;
    }
}
