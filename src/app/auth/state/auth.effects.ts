import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
import { AuthActionTypes, LoginAction, LoginFailed, LoginSuccess } from 'src/app/auth/state/auth.actions';
import { Login } from 'src/app/models/auth/login.model';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

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
}
