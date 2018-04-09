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
import AutoLogo from 'assets/images/Auto.png';
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
  CenterPanel,
  LoginPanel,
  Logo,
  Title,
  FooterPanel,
  LoginButton,
  BlankPanel,
} = Styles;

export class LoginPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  render() {
    return (
      <LoginContainer>
        <BlankPanel />
        <CenterPanel>
          <LoginPanel>
            <Logo src={AutoLogo} />
            <Title> Progress Planner </Title>
            <a href="/api/auth/facebook" > <LoginButton > LOG IN WITH FACEBOOK </LoginButton> </a>
          </LoginPanel>
        </CenterPanel>
        <FooterPanel />
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
