import { Action } from '@ngrx/store';
import { UserData } from 'src/app/models/state/auth-state.model';

export enum AuthActionTypes {
  UserLogin = '[Login] Get User',
  UserLogout = '[Logout] Clear User',
  AuthLoading = '[API] Wait Response'
}

export class UserLogin implements Action {
  readonly type = AuthActionTypes.UserLogin;

  constructor(public payload: UserData) {}
}

export class UserLogout implements Action {
  readonly type = AuthActionTypes.UserLogout;

  constructor() {}
}

export class AuthLoading implements Action {
  readonly type = AuthActionTypes.AuthLoading;

  constructor(public payload: boolean) {}
}

export type AuthActions = UserLogin | UserLogout | AuthLoading;
