import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, retry, throwError } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private route: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        this.route.navigateByUrl('/error');
        return throwError(error);
      })
    );
  }
}
