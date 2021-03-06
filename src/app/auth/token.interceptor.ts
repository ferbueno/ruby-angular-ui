import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from 'src/app/state/app.state';
import { getAuthState } from 'src/app/auth/state/auth.selector';

export const InterceptorSkipHeader = 'X-Skip-Interceptor';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  token: string;
  constructor(private store: Store<State>) {
    this.store.pipe(select(getAuthState)).subscribe(auth => {
      this.token = auth.userData.token;
    });
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (request.headers.has(InterceptorSkipHeader)) {
      request.headers.delete(InterceptorSkipHeader);
      request = request.clone();
      return next.handle(request);
    } else {
      request = request.clone({
        setHeaders: {
          'Authorization': `Bearer ${this.token}`,
          'Content-Type': 'application/json'
        }
      });
      return next.handle(request);
    }
  }
}
