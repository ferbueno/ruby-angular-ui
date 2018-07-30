import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Store } from '@ngrx/store';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, tap } from 'rxjs/operators';
import { AuthLoading, UserLogin, UserLogout } from 'src/app/auth/state/auth.actions';
import { InterceptorSkipHeader } from 'src/app/auth/token.interceptor';
import { Login } from 'src/app/models/auth/login.model';
import { NewAccount } from 'src/app/models/auth/new-account.model';
import { UserData } from 'src/app/models/state/auth-state.model';
import { environment } from 'src/environments/environment';
import { AppState } from 'src/app/models/state/app-state.model';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

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
    private store: Store<AppState>,
    private router: Router
  ) {
    this.jwtHelperService = new JwtHelperService();
  }

  register(newAccount: NewAccount): Observable<NewAccount> {
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

  login(login: Login): Observable<UserData> {
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
          sessionStorage.setItem('token', user.token);
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

  logout(): void {
    this.store.dispatch(new UserLogout());
    sessionStorage.removeItem('token');
    this.router.navigate(['auth', 'login']);
  }

  isAuthenticated(): boolean {
    const token = sessionStorage.getItem('token');
    return !this.jwtHelperService.isTokenExpired(token);
  }
}
