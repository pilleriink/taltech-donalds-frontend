import { Observable, of } from 'rxjs';
import * as L from 'leaflet';
import { PopUpService } from './pop-up.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {MessageService} from './message.service';
import {environment} from '../environments/environment';
import {catchError, tap} from 'rxjs/operators';
import {Location} from './location';
import {Advertisement} from './advertisement';

@Injectable({
    providedIn: 'root'
})

export class MarkerService {
    private locationsUrl = 'api/locations';

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    locations: Observable<Location[]> = this.getLocations();

    constructor(
        private http: HttpClient,
        private messageService: MessageService,
        private popupService: PopUpService) { }

    getLocations(): Observable<Location[]> {
        return this.http.get<Location[]>(environment.apiUrl + this.locationsUrl)
            .pipe(
                tap(_ => this.log('fetched categories')),
                catchError(this.handleError<Location[]>('getCategories', []))
            );
    }

    addLocation(location: Location): Observable<Location> {
        const url = `${environment.apiUrl}${this.locationsUrl}`;
        return this.http.post<Location>(url, location, this.httpOptions)
            .pipe(
                catchError(this.handleError('addLocation', location))
            );
    }

    deleteLocation(location: Location): Observable<Location>{
        const url = `${environment.apiUrl}${this.locationsUrl}`;
        return this.http.delete<Location>(url + "/" + location.id)
            .pipe(catchError(this.handleError('location to delete', location)));
    }

    makeCapitalMarkers(map: L.Map): void {
        // tslint:disable-next-line:no-shadowed-variable
        this.locations.forEach(l => l.map(l => {
            const lat = l.lat;
            const lon = l.lon;
            const marker = L.marker([lon, lat]).addTo(map);
            marker.bindPopup(this.popupService.makeCapitalPopup(l));
            marker.addTo(map);
        }));
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
