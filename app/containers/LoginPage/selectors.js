/**
 * Loginpage selectors
 */

import { createSelector } from 'reselect';

const selectAuth = (state) => state.get('profile');


const makeSelectIsAuth = () => createSelector(
  selectAuth,
  (authState) => authState.get('isAuth'),
);

export {
  makeSelectIsAuth,
};
