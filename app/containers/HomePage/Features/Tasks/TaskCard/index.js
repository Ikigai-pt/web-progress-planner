import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import TaskCardBody from './TaskCardBody';
import TaskCardHeader from './TaskCardHeader';

const TaskCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 10px;
`;

class TaskCard extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = { isExpanded: true }
  toggleHandler = this.toggleHandler.bind(this);

  toggleHandler() {
    const isExpandedNow = !this.state.isExpanded;
    this.setState({ isExpanded: isExpandedNow });
  }
  /**
   * when initial state username is not null, submit the form to load repos
   */
  render() {
    const { task } = this.props;
    const { isExpanded } = this.state;
    return (
      <TaskCardContainer>
        <TaskCardHeader title={task.title} priority={3} isRecurring isExpanded={isExpanded} handleToggle={this.toggleHandler} />
        {isExpanded ? <TaskCardBody task={task} /> : ''}
      </TaskCardContainer>
    );
  }
}

TaskCard.propTypes = {
  task: PropTypes.object,
};

export default TaskCard;
