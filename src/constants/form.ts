export interface ISignUpForm {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export type TSignInForm = {
  email: string;
  password: string;
};
