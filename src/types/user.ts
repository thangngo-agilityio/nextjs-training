export type TUser = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  avatar?: string;
};

export interface LoginFormData {
  email: string;
  password: string;
}

export interface UserLogin {
  email: string;
  password: string;
}
export interface User extends LoginFormData {
  name: string;
  token: string;
}
