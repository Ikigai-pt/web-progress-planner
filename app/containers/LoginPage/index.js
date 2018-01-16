/*
 * LoginPage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
// import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
// import { makeSelectRepos, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import * as Styles from './loginStyles';
// import { loadRepos } from '../App/actions';
import { authenticateUser } from './actions';
// import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { AUTH_FACEBOOK } from './constants';

const {
  LoginContainer,
  LoginPanel,
  Title,
  TextBox,
  LoginButton,
  SocialLogin,
  LinkText,
  GoogleLogo,
  FacebookLogo,
  BlankPanel,
  SpacedTwoColumn,
} = Styles;

export class LoginPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  render() {
    return (
      <LoginContainer>
        <BlankPanel />
        <LoginPanel>
          <Title> Progress Planner </Title>
          <TextBox placeholder="username" />
          <TextBox placeholder="password" />
          <LoginButton> SIGN IN </LoginButton>
          <SpacedTwoColumn>
            <LinkText> Forgot Password ? </LinkText>
            <LinkText> Forgot Username ? </LinkText>
          </SpacedTwoColumn>
          <SpacedTwoColumn>
            <SocialLogin> <FacebookLogo /> <a href="/api/auth/facebook" > Facebook </a></SocialLogin>
            <SocialLogin> <GoogleLogo /> <a href=""> Google </a> </SocialLogin>
          </SpacedTwoColumn>
        </LoginPanel>
        <BlankPanel />
      </LoginContainer>
    );
  }
}

LoginPage.propTypes = {
  onFacebookLogin: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onFacebookLogin: () => {
      dispatch(authenticateUser(AUTH_FACEBOOK));
    },
  };
}

const mapStateToProps = createStructuredSelector({
  // loading: makeSelectLoading(),
  // error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'profile', reducer });
const withSaga = injectSaga({ key: 'profile', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(LoginPage);
