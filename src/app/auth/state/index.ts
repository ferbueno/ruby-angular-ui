export interface AuthState {
  userData: UserData;
  loading: boolean;
}

export interface UserData {
  user: {
    id: number;
    first_name: string;
    last_name: string;
  };
  token: string;
}
