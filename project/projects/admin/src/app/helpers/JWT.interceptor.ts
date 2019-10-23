import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';

import { AuthenticationService } from './../services/authentication.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser && currentUser.token) {
      const authReq = request.clone({
        setHeaders: {
          'Content-Type': 'application/json; charset=utf-8',
          Accept: 'application/json',
          Authorization: `Bearer ${currentUser.token}`
        }
      });
      return next.handle(authReq);
    }

    return next.handle(request);
  }

  // intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   return from(this.handleAccess(request, next));
  //   // return next.handle(request);
  // }

  // private async handleAccess(request: HttpRequest<any>, next: HttpHandler):
  //   Promise<HttpEvent<any>> {
  //   const token = await this.authenticationService.currentUserValue;
  //   let changedRequest = request;
  //   // HttpHeader object immutable - copy values
  //   const headerSettings: { [name: string]: string | string[]; } = {};

  //   for (const key of request.headers.keys()) {
  //     headerSettings[key] = request.headers.getAll(key);
  //   }
  //   if (token) {
  //     headerSettings.Authorization = 'Bearer ' + token;
  //   }
  //   headerSettings['Content-Type'] = 'application/json';
  //   const newHeader = new HttpHeaders(headerSettings);

  //   changedRequest = request.clone({
  //     headers: newHeader
  //   });
  //   return next.handle(changedRequest).toPromise();
  // }
}
