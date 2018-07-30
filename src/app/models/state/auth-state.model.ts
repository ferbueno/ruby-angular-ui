export interface AuthState {
  userData: {
    user: {
      id: number;
      first_name: string;
      last_name: string;
      user: string;
      email: string;
    };
    token: string;
  };
  loading: boolean;
}
