/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import { pxToRem } from 'components/pxToRem';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { TasksListPanel, FocusTasksListPanel, RetrospectivePanel } from './Features';
import { makeSelectUsername } from './selectors';
import { fetchUser } from './actions';
import reducer from './reducer';
import saga from './saga';
import SummaryPanel from './Features/Summary';

const HomePageWrapper = styled.div`
  position: relative;
  padding: ${pxToRem(56)} ${pxToRem(32)} 0 ${pxToRem(32)};
  margin: 0 auto;
  width: 100%;
  max-width: ${pxToRem(1366)};
  overflow-y: hidden;
  background: ${({ theme }) => theme.colors.sText};
`;

const MainContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 64px;
  margin-top: 32px;
`;

const FooterPanel = styled.div`
  margin: 62px 0px;
`;

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    this.props.fetchLoggedInUser(this.props.userId);
  }

  render() {
    return (
      <HomePageWrapper>
        <SummaryPanel />
        <MainContentWrapper>
          <TasksListPanel />
          <div>
            <FocusTasksListPanel key={1} title={'FOCUS TASKS'} />
            <FocusTasksListPanel key={2} title={'TODO TASKS'} />
            <RetrospectivePanel key={3} title={'RETROSPECTIVE'} />
          </div>
        </MainContentWrapper>
        <FooterPanel />
      </HomePageWrapper>
    );
  }
}

HomePage.propTypes = {
  userId: PropTypes.string,
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
