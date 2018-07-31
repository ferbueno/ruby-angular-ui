import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, tap, mapTo } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import {
  AuthActionTypes,
  LoginAction,
  LoginFailed,
  LoginSuccess
} from 'src/app/auth/state/auth.actions';
import { Login } from '../models/login.model';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  @Effect()
  login$: Observable<Action> = this.actions$.pipe(
    ofType(AuthActionTypes.LoginAction),
    map((action: LoginAction) => action.payload),
    mergeMap((login: Login) =>
      this.authService.login(login).pipe(
        map(user => new LoginSuccess(user)),
        catchError(err => of(new LoginFailed(err)))
      )
    )
  );

  @Effect({ dispatch: false })
  loginSuccess$: Observable<Action> = this.actions$.pipe(
    ofType(AuthActionTypes.LoginSuccess),
    tap(() => {
      this.router.navigateByUrl('/dashboard');
    })
  );
}
