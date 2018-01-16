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

import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
} from './constants';

const initialState = fromJS({
  loading: false,
  id: null,
  email: null,
  name: null,
  error: null,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER:
      return state.set('loading', true);
    case FETCH_USER_SUCCESS:
      console.log(JSON.stringify(action.user))
      return state
        .set('loading', false)
        .set('id', action.user.id)
        .set('name', action.user.name)
        .set('email', action.user.email);
    case FETCH_USER_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error);
    default:
      return state;
  }
}

export default homeReducer;
