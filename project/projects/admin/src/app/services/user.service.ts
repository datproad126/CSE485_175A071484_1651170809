
import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient, HttpHeaders, HttpResponse, HttpParams } from '@angular/common/http';
import { User } from '../models/user';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { AuthenticationService } from './authentication.service';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json; charset=UTF-8',
  })
};
@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) {
    // const currentUser = this.authenticationService.currentUserValue;
    // httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer: ' + currentUser.token);
  }

  /** GET: get the user from the server */
  readUserData(): Observable<User[]> {
    const url = `${environment.PHP_API_SERVER}/user/read.php`; // READ api/user/read.php
    return this.http.get<User[]>(url, httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  /** DELETE: delete the user from the server */
  deleteData(user: User[]): Observable<User[]> {
    const url = `${environment.PHP_API_SERVER}/user/delete.php`; // DELETE api/user
    return this.http.post<User[]>(url, user, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  /** CREATE: create the user from the server */
  createUser(user: User): Observable<User> {
    const options = { params: new HttpParams().get(JSON.stringify(user)) };
    const url = `${environment.PHP_API_SERVER}/user/registered.php`; // CREATE api/user
    return this.http.post<User>(url, options)
      .pipe(retry(1),
        catchError(this.handleError)
      );
  }
  /** UPDATE: update the user from the server */
  updateUser(user: User): Observable<User[]> {
    const url = `${environment.PHP_API_SERVER}/authenticate/update.php`; // UPDATE api/user
    return this.http.post<User[]>(url, user, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  /** PAGINATION: pagination the user from the server */
  pagination(page: number, entry: number): Observable<any> {
    const url = `${environment.PHP_API_SERVER}/user/pagination.php`; // UPDATE api/user
    return this.http.post<any>(url, { page, entry }, httpOptions)
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
