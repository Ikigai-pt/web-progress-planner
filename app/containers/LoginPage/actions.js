/*
 * Login Actions
 */

import {
  AUTHENTICATE,
  AUTHENTICATE_SUCCESS,
  AUTHENTICATE_ERROR,
} from './constants';

/**
 * Authenticate the user
 *
 * @param  {authType} authTypw The type of authentication (FB, Google, local)
 *
 * @return {object}    An action object with a type of AUTHENTICATE
 */
export function authenticateUser(authType) {
  return {
    type: AUTHENTICATE,
    authType,
  };
}

export function authenticateUserSuccess(user) {
  return {
    type: AUTHENTICATE_SUCCESS,
    user,
  };
}
export function authenticateUserError(err) {
  return {
    type: AUTHENTICATE_ERROR,
    err,
  };
}
