export interface AuthState {
  userData: {
    user: {
      id: Number;
      user: String;
      email: String;
    };
    token: String;
  };
  loading: Boolean;
}
