export interface User {
  id: string;
  username: string;
  password: string;
  email: string;
  profile_photo?: string;
}

export interface Token {
  id: string;
}

export interface Register {
  username: string;
  email: string;
  password: string;
}

export interface Login {
  email: string;
  password: string;
}

export interface UserResult {
  id: string;
  password: string;
  username: string;
}
