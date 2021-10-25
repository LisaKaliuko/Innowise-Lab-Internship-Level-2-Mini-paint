import { AppRouteNames } from './app-route-names.constants';

export const LoginFormData = {
  title: 'Login',
  text: 'Don’t have an account? ',
  link: AppRouteNames.Register,
  linkName: 'Register',
};

export const RegisterFormData = {
  title: 'Registration',
  text: 'Already have an account? ',
  link: AppRouteNames.Login,
  linkName: 'Login',
};
