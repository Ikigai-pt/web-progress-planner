/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';
import { Redirect } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import Cookies from 'js-cookie';
import { theme as Theme } from 'themeStyles';
import Header from 'components/Header';
import LoginPage from 'containers/LoginPage/Loadable';
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  width: 100%;
  height: 100%;
  .react-toggle {
    // NOTE: not sure why this is rendering inconsistently from modules/storybook
    vertical-align: middle;
  }
  box-sizing : border-box;
  background: ${({ theme }) => theme.colors.primaryBackground};
`;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }
  isAuthenticated() {
    const isAuth = !!Cookies.get('PROGRESS_PLANNER');
    return isAuth;
  }
  render() {
    const isLoggedIn = this.isAuthenticated();
    const userId = Cookies.get('PROGRESS_PLANNER');
    return (
      <ThemeProvider theme={Theme.rickshaw}>
        <AppWrapper>
          <Helmet
            titleTemplate="%s - React.js Boilerplate"
            defaultTitle="React.js Boilerplate"
          >
            <meta name="description" content="A React.js Boilerplate application" />
          </Helmet>
          { isLoggedIn ? <Header /> : '' }
          <Switch>
            <Route
              path="/login"
              render={() => (isLoggedIn ? (<Redirect to="/" />) : (<LoginPage />))}
            />
            <Route
              path="/"
              render={() => (isLoggedIn ? (<HomePage userId={userId} />) : (<Redirect to="/login" />))}
            />
            <Route path="" component={NotFoundPage} />
          </Switch>
        </AppWrapper>
      </ThemeProvider>
    );
  }
}
