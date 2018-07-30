import { AuthState } from 'src/app/models/state/auth-state.model';

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

export function reducer(state: AuthState = initialState, action): AuthState {
  switch (action.type) {
    case 'USER_LOGIN':
      return {
        ...state,
        userData: action.payload
      };
    case 'AUTH_LOADING':
      return {
        ...state,
        loading: action.payload
      };
    default:
      return state;
  }
}
