import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Store } from '@ngrx/store';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, tap } from 'rxjs/operators';
import { AuthLoading, UserLogin } from 'src/app/auth/state/auth.actions';
import { InterceptorSkipHeader } from 'src/app/auth/token.interceptor';
import { Login } from 'src/app/models/auth/login.model';
import { NewAccount } from 'src/app/models/auth/new-account.model';
import { UserData } from 'src/app/models/state/auth-state.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  registerUrl: string = environment.apiUrl + '/users';
  loginUrl: string = environment.apiUrl + '/login';

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private store: Store<any>
  ) {}

  register(newAccount: NewAccount): Observable<any> {
    this.store.dispatch(new AuthLoading(true));
    const payload = {
      user: {
        first_name: newAccount.firstName,
        last_name: newAccount.lastName,
        email: newAccount.email,
        password: newAccount.password
      }
    };
    const headers = new HttpHeaders().set(InterceptorSkipHeader, '');
    return this.http
      .post<NewAccount>(this.registerUrl, payload, { headers })
      .pipe(
        catchError(error => {
          const message = 'An error ocurred creating your account';
          const action = 'Ok';
          this.snackBar.open(message, action, {
            duration: 3000
          });
          return throwError(error);
        })
      )
      .pipe(
        finalize(() => {
          this.store.dispatch(new AuthLoading(false));
        })
      );
  }

  login(login: Login) {
    this.store.dispatch(new AuthLoading(true));
    const payload = {
      login: login
    };
    const headers = new HttpHeaders().set(InterceptorSkipHeader, '');
    return this.http
      .post<UserData>(this.loginUrl, payload, { headers })
      .pipe(
        tap(user => {
          this.store.dispatch(new UserLogin(user));
        })
      )
      .pipe(
        catchError(error => {
          const message = 'Username or password is incorrect';
          const action = 'Ok';
          this.snackBar.open(message, action, {
            duration: 3000
          });
          return throwError(error);
        })
      )
      .pipe(
        finalize(() => {
          this.store.dispatch(new AuthLoading(false));
        })
      );
  }

  isAuthenticated(): boolean {
    return true;
  }
}
