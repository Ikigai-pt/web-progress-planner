/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Redirect } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import Cookies from 'js-cookie';
import LoginPage from 'containers/LoginPage/Loadable';
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

const AppWrapper = styled.div`
  max-width: calc(960px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
  background: #fafafa;
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
    console.log(this.isAuthenticated());
    const isLoggedIn = this.isAuthenticated();
    const userId = Cookies.get('PROGRESS_PLANNER');
    return (
      <AppWrapper>
        <Helmet
          titleTemplate="%s - React.js Boilerplate"
          defaultTitle="React.js Boilerplate"
        >
          <meta name="description" content="A React.js Boilerplate application" />
        </Helmet>
        <Switch>
          <Route
            path="/login"
            render={() => (isLoggedIn ? (<Redirect to="/home" />) : (<LoginPage />))}
          />
          <Route
            path="/home"
            render={() => (isLoggedIn ? (<HomePage userId={userId}/>) : (<Redirect to="/login" />))}
          />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </AppWrapper>
    );
  }
}
