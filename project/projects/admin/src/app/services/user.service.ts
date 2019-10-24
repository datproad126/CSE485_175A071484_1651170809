
import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


const PHP_API_SERVER = 'https://cse485tech.000webhostapp.com/?dir=PHP_API/backend/api';
@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) {
  }

  /** GET: get the user from the server */
  readUserData(): Observable<any> {
    const url = `${PHP_API_SERVER}/user/read.php`; // READ api/user/read.php
    return this.http.get<any>(url)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  /** DELETE: delete the user from the server */
  deleteData(user: any[]): Observable<any[]> {
    const url = `${PHP_API_SERVER}/user/delete.php`; // DELETE api/user
    return this.http.post<any[]>(url, user)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  /** DELETE ALL: delete all the user from the server */
  deleteAllData(users: User[]): Observable<any> {
    const url = `${PHP_API_SERVER}/user/deleteAll.php`; // DELETE api/user
    return this.http.post<any>(url, users)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  /** CREATE: create the user from the server */
  createUser(user: any): Observable<any> {
    console.log(user);
    const url = `${PHP_API_SERVER}/user/registered.php`; // CREATE api/user
    return this.http.post<any>(url, JSON.stringify(user))
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  /** UPDATE: update the user from the server */
  updateUser(user: User): Observable<User[]> {
    const url = `${PHP_API_SERVER}/authenticate/update.php`; // UPDATE api/user
    return this.http.post<User[]>(url, user)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  /** PAGINATION: pagination the user from the server */
  pagination(page: number, entry: number, sort: string, filter: string): Observable<any> {
    const url = `${PHP_API_SERVER}/user/pagination.php`; // UPDATE api/user
    return this.http.post<any>(url, JSON.stringify({ page, entry, sort, filter }))
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  /** SEARCH: SEARCH the user from the server */
  searching(search: string, field: string): Observable<any> {
    const url = `${PHP_API_SERVER}/user/search.php`; // UPDATE api/user
    return this.http.post<any>(url, JSON.stringify({ search, field }))
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
