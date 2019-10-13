
import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { User } from '../models/user';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../../environments/environment';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }

  /** GET: get the user from the server */
  readUserData(): Observable<User[]> {
    const url = `${environment.PHP_API_SERVER}/read.php`; // READ api/user/read.php
    return this.http.get<User[]>(url, httpOptions)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }
  /** DELETE: delete the user from the server */
  deleteData(user: User[]): Observable<HttpResponse<User[]>> {
    const url = `${environment.PHP_API_SERVER}/delete.php`; // DELETE api/user
    return this.http.post<User[]>(url, user, { observe: 'response' })
      .pipe(
        catchError(this.handleError)
      );
  }

  /** CREATE: delete the user from the server */
  createUser(user: User[]): Observable<HttpResponse<User[]>> {
    const observe = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      observe: 'response'
    };
    const url = `${environment.PHP_API_SERVER}/delete.php`; // DELETE api/user
    return this.http.post<HttpResponse<User[]>>(url, user, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  /** Error: show error messages */
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
