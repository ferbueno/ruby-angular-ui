import { AuthState } from 'src/app/auth/state';
import { AuthActions, AuthActionTypes } from 'src/app/auth/state/auth.actions';

const initialState: AuthState = {
  userData: {
    user: {
      id: 0,
      first_name: sessionStorage.getItem('first_name'),
      last_name: sessionStorage.getItem('last_name')
    },
    token: sessionStorage.getItem('token')
  },
  loading: false
};

export function authReducer(
  state: AuthState = initialState,
  action: AuthActions
): AuthState {
  switch (action.type) {
    case AuthActionTypes.LoginAction:
      return {
        ...state,
        loading: true
      };
    case AuthActionTypes.LoginSuccess:
      return {
        ...state,
        userData: action.payload,
        loading: false
      };
    case AuthActionTypes.UserLogout:
      return {
        ...state,
        userData: initialState.userData
      };
    case AuthActionTypes.AuthLoading:
      return {
        ...state,
        loading: action.payload
      };
    default:
      return state;
  }
}
