/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { FETCH_USER } from './constants';
import { fetchUserSuccess, fetchUserError } from './actions';

export function* getUser(user) {
  // Select username from store
  console.log("get user" +JSON.stringify(user.userId))
  const RequestUrl = `/api/user?userId=${user.userId}`;
  const options = {
    method: 'GET',
    json: true,
  };

  try {
    const user = yield call(request, RequestUrl, options);
    console.log("user fetch "+JSON.stringify(user))
    yield put(fetchUserSuccess(user));
  } catch (err) {
    console.log("user fetch "+JSON.stringify(err))
    yield put(fetchUserError(err));
  }
}
/**
 * Root saga manages watcher lifecycle
 */
export default function* getUserSaga() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(FETCH_USER, getUser);
}
