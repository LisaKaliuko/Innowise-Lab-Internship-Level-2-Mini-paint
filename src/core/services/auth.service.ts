import { auth } from '@src/index';

export const registerUser = (
  email: string,
  password: string
): Promise<string | null | undefined> => {
  return auth
    .createUserWithEmailAndPassword(email, password)
    .then((resp) => resp.user?.email);
};

export const loginUser = (
  email: string,
  password: string
): Promise<string | null | undefined> => {
  return auth
    .signInWithEmailAndPassword(email, password)
    .then((user) => user.user?.email);
};

export const logOutUser = (): Promise<void> => auth.signOut();
