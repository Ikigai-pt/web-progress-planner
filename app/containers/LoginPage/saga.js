/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import request from 'utils/request';
import { AUTHENTICATE } from './constants';
import { authenticateUserSuccess, authenticateUserError } from './actions';


/**
 * Github repos request/response handler
 */
export function* authUser() {
  // Select username from store
  const RequestUrl = '/api/auth/facebook';
  const options = {
    method: 'GET',
    json: true,
  };

  try {
    console.log(JSON.stringify(options))
    // Call our request helper (see 'utils/request')
    const user = yield call(request, RequestUrl, options);
    yield put(authenticateUserSuccess(user));
    yield put(push('/home'));
  } catch (err) {
    yield put(authenticateUserError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* authUserSaga() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(AUTHENTICATE, authUser);
}
