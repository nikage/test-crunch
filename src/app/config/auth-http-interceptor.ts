import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse,
}                     from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap }        from 'rxjs/operators';
import { Router }     from '@angular/router';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');

    if (token) {
      req = req.clone({
        headers: req.headers.set('Authorization',
          'Bearer ' + token),
      });
    }

    return next.handle(req).pipe(tap(() => {
      },
      (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status !== 401) {
            return;
          }
          this.router.navigate([ 'login' ]);
        }
      }));
  }
}
