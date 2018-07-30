import { AuthState } from 'src/app/models/state/auth-state.model';
import { AuthActions, AuthActionTypes } from 'src/app/auth/state/auth.actions';

const initialState: AuthState = {
  userData: {
    user: {
      id: 0,
      first_name: '',
      last_name: '',
      user: '',
      email: ''
    },
    token: ''
  },
  loading: false
};

export function reducer(
  state: AuthState = initialState,
  action: AuthActions
): AuthState {
  switch (action.type) {
    case AuthActionTypes.UserLogin:
      return {
        ...state,
        userData: action.payload
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
