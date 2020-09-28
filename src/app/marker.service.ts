import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import * as L from 'leaflet';
import {MessageService} from './message.service';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {
  private locationsUrl = '/api/locations';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  locations: Observable<Location[]> = this.getLocations()

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

    getLocations(): Observable<Location[]> {
      return this.http.get<Location[]>(environment.apiUrl + this.locationsUrl)
        .pipe(
          tap(_ => this.log('fetched categories')),
          catchError(this.handleError<Location[]>('getCategories', []))
        );
    }

  makeCapitalMarkers(map: L.Map): void {
   this.locations.forEach(l => l.map(l => {
      const lat = l['lat'];
      const lon = l['lon'];
      const marker = L.marker([lon, lat]).addTo(map);
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
