import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MessageService} from "./message.service";
import {Observable, of} from "rxjs";
import {catchError, tap} from "rxjs/operators";
import {Advertisement} from './advertisement';
import {environment} from "../environments/environment";

@Injectable({ providedIn: 'root' })
export class AdvertisementService {

  private adsUrl = 'api/ads';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
      private http: HttpClient,
      private messageService: MessageService) { }

  getAds(): Observable<Advertisement[]> {
    return this.http.get<Advertisement[]>(environment.apiUrl + this.adsUrl)
        .pipe(
            tap(_ => this.log('fetched ads')),
            catchError(this.handleError<Advertisement[]>('getAds', []))
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
