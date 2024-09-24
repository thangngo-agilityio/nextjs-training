export type AuthFormData = {
  email: string;
  password: string;
  confirmPassword: string;
  isRemember?: boolean;
  firstName?: string;
  lastName?: string;
};

export type TSignInForm = {
  email: string;
  password: string;
};
