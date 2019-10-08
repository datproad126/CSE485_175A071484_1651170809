import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { User } from '../model/user';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap, map } from 'rxjs/operators';

// declare http header
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})

export class UserService {
  // declare api server
  private PHP_API_SERVER = 'http://18.39.105.26:8080/api/user';

  constructor(private http: HttpClient) { }
  // get all user by httpclient
  readUserData(): Observable<User[]> {
    return this.http.get<any>(`${this.PHP_API_SERVER}/read.php`, httpOptions)
      .pipe(
        retry(3),
        catchError(this.handleError),
      );
  }
  // delete user
  deleteData(user: User[]): Observable<HttpResponse<any>> {
    return this.http.post<any>(`${this.PHP_API_SERVER}/delete.php`, user, { observe: 'response' })
      .pipe(
        catchError(this.handleError)
      );
  }
  // error handle here
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
