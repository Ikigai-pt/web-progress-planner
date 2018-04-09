/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';
import Cookies from 'js-cookie';

import {
  AUTHENTICATE,
  AUTHENTICATE_SUCCESS,
  AUTHENTICATE_ERROR,
} from './constants';

const COOKIE_NAME = 'progressplanner';

const initialState = fromJS({
  loading: false,
  errors: null,
  user: null,
  isAuth: Cookies.get(COOKIE_NAME),
});

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return state
        .set('loading', true);
    case AUTHENTICATE_SUCCESS:
      return state
        .set('loading', false)
        .set('isAuth', true)
        .set('user', action.user);
    case AUTHENTICATE_ERROR:
      return state
        .set('loading', false)
        .set('errors', action.errors);
    default:
      return state;
  }
};

export default loginReducer;
