import { Action } from '@ngrx/store';
import { Login } from 'src/app/auth/models/login.model';
import { UserData } from 'src/app/auth/state';

export enum AuthActionTypes {
  LoginAction = '[Login] Load Login',
  LoginSuccess = '[Login] Login Successful',
  LoginFailed = '[Login] Login Failed',
  UserLogout = '[Logout] Clear User',
  AuthLoading = '[API] Wait Response'
}

export class LoginAction implements Action {
  readonly type = AuthActionTypes.LoginAction;

  constructor(public payload: Login) {}
}

export class LoginFailed implements Action {
  readonly type = AuthActionTypes.LoginFailed;
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LoginSuccess;

  constructor(public payload: UserData) {}
}

export class UserLogout implements Action {
  readonly type = AuthActionTypes.UserLogout;
}

export class AuthLoading implements Action {
  readonly type = AuthActionTypes.AuthLoading;

  constructor(public payload: boolean) {}
}

export type AuthActions =
  | LoginAction
  | LoginFailed
  | LoginSuccess
  | UserLogout
  | AuthLoading;
