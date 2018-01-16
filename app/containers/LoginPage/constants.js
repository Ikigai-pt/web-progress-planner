/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const AUTHENTICATE = 'LoginPage/AUTHENTICATE';
export const AUTHENTICATE_SUCCESS = 'LoginPage/AUTHENTICATE_SUCCESS';
export const AUTHENTICATE_ERROR = 'LoginPage/AUTHENTICATE_ERROR';
export const UNAUTHENTICATE = 'LoginPage/UNAUTHENTICATE';
export const UNAUTHENTICATE_SUCCESS = 'LoginPage/UNAUTHENTICATE_SUCCESS';
export const UNAUTHENTICATE_ERROR = 'LoginPage/UNAUTHENTICATE_ERROR';
export const AUTH_FACEBOOK = 'facebook';
export const AUTH_GOOGLE = 'google';
export const AUTH_LOCAL = 'local';
