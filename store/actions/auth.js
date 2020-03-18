import * as actionTypes from "./actionTypes";

export const signIn = (email, password) => {
  return { type: actionTypes.SIGN_IN, email: email, password: password };
};

export const signUp = (email, password) => {
  return { type: actionTypes.SIGN_UP, email: email, password: password };
};

export const signOut = () => {
  return { type: actionTypes.SIGN_OUT };
};

export const restoreToken = token => {
  return { type: actionTypes.RESTORE_TOKEN, token: token };
};
