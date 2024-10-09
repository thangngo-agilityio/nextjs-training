export const ERROR_MESSAGES = {
  FIELD_REQUIRED: (fieldName: string) => `${fieldName} is required`,
  USER_NOT_FOUND: 'User not found. Please check again.',
  UNKNOWN_ERROR: 'Something went wrong.',
  EMAIL_EXIST: 'Email already exists',
  CREATE_CART: 'Your cart creation failed',
  UPDATE_CART: 'Updating your cart failed.',
  TEXT_FAILED: 'There must be no space in front',
  EMAIL_FAILED: 'Email is not in correct format (example: @test.com)',
  PASSWORD_NOT_MATCH: 'Password does not match',
  AUTH_INCORRECT: 'Email or password is incorrect',
};

export const SUCCESS_MESSAGES = {
  ADD_CART: 'Adding product to your cart successfully.',
  LOGIN: 'Login successfully.',
  DELETE_CART_ITEM: 'Delete cart item successfully.',
  CHECKOUT: 'Checkout successfully.',
};
