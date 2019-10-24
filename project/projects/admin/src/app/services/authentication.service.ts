import { map, catchError } from 'rxjs/operators';
import { User } from '../models/user';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';

const PHP_API_SERVER = 'https://cse485tech.000webhostapp.com/PHP_API/backend/api';
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8',
    })
};
@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(loginInput: string, password: string): Observable<any> {
        return this.http.post<any>(
            `${PHP_API_SERVER}/authentication/login.php`,
            JSON.stringify({ loginInput, password }),
            // httpOptions
        )
            .pipe(
                // retry(2),
                map(
                    user => {
                        // store user details and jwt token in local storage to keep user logged in between page refreshes
                        localStorage.setItem('currentUser', JSON.stringify(user));
                        this.currentUserSubject.next(user);
                        return user;
                    }),
                catchError(this.handleError)
            );
    }

    register(registerForm: any): Observable<any> {
        return this.http.post<any>(
            `${PHP_API_SERVER}/user/registered.php`,
            JSON.stringify(registerForm),
            // httpOptions
        )
            .pipe(
                catchError(this.handleError)
            );
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
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
