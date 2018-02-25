/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { TasksListPanel, FocusTasksListPanel, TimelinePanel, WeeklyHabitsGridPanel } from './Features';
import { makeSelectUsername } from './selectors';
import { fetchUser } from './actions';
import reducer from './reducer';
import saga from './saga';
import Layout from './Layout';
import CalendarPanel from './Features/CalendarPanel';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    this.props.fetchLoggedInUser(this.props.userId);
  }

  render() {
    const { username } = this.props;
    return (
      <div>
        <CalendarPanel date={'2018-02-19'} />
        <Layout>
          <TasksListPanel />
          <FocusTasksListPanel />
          <WeeklyHabitsGridPanel />
        </Layout>
      </div>
    );
  }
}

HomePage.propTypes = {
  userId: PropTypes.string,
  username: PropTypes.string,
  fetchLoggedInUser: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    fetchLoggedInUser: (userId) => {
      dispatch(fetchUser(userId));
    },
  };
}

const mapStateToProps = createStructuredSelector({
  username: makeSelectUsername(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
