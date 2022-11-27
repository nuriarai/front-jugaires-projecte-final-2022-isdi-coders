export interface User {
  id: string;
  username: string;
  password: string;
  email: string;
}

export interface UserRegisterData {
  username: string;
  password: string;
  email: string;
}

export interface UserLoginData {
  username: string;
  token: string;
  id: string;
}

export interface UserState extends UserLoginData {
  isLogged: boolean;
}
