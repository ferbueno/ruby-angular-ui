export function reducer(state, action) {
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
