import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Store } from '@ngrx/store';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, tap } from 'rxjs/operators';
import { Login } from 'src/app/auth/models/login.model';
import { NewAccount } from 'src/app/auth/models/new-account.model';
import { UserData } from 'src/app/auth/state';
import {
  AuthLoading,
  LoginSuccess,
  UserLogout
} from 'src/app/auth/state/auth.actions';
import { InterceptorSkipHeader } from 'src/app/auth/token.interceptor';
import { State } from 'src/app/state/app.state';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  registerUrl: string = environment.apiUrl + '/users';
  loginUrl: string = environment.apiUrl + '/login';
  jwtHelperService: JwtHelperService;

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private store: Store<State>,
    private router: Router
  ) {
    this.jwtHelperService = new JwtHelperService();
  }

  register(newAccount: NewAccount): Observable<NewAccount> {
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
  }

  login(login: Login): Observable<UserData> {
    const payload = {
      login: login
    };
    const headers = new HttpHeaders().set(InterceptorSkipHeader, '');
    return this.http
      .post<UserData>(this.loginUrl, payload, { headers })
      .pipe(
        tap(userData => {
          this.store.dispatch(new LoginSuccess(userData));
          sessionStorage.setItem('token', userData.token);
          sessionStorage.setItem('first_name', userData.user.first_name);
          sessionStorage.setItem('last_name', userData.user.last_name);
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
  }

  logout(): void {
    this.store.dispatch(new UserLogout());
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('first_name');
    sessionStorage.removeItem('last_name');
    this.router.navigate(['auth', 'login']);
  }

  isAuthenticated(): boolean {
    const token = sessionStorage.getItem('token');
    return !this.jwtHelperService.isTokenExpired(token);
  }
}
