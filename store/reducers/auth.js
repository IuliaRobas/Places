import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = { token: null, userId: null, loading: false };
import { store } from "../../Root";

const restoreToken = (state, action) => {
  return updateObject(state, {
    token: "token"
  });
};

const signIn = (state, action) => {
  const email = action.email;
  const password = action.password;
  const dummyToken = "sign-in-token";

  return updateObject(state, {
    userId: email,
    token: dummyToken
  });
};

const signUp = (state, action) => {
  const email = action.email;
  const password = action.password;
  const dummyToken = action.email + "sign-up-token";
  return updateObject(state, {
    userId: email,
    token: dummyToken
  });
};

const signOut = (state, action) => {
  return updateObject(state, {
    token: null
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGN_IN:
      return signIn(state, action);
    case actionTypes.SIGN_UP:
      return signUp(state, action);
    case actionTypes.SIGN_OUT:
      return signOut(state, action);
    case actionTypes.RESTORE_TOKEN:
      return restoreToken(state, action);
    default:
      return state;
  }
};

export default reducer;
