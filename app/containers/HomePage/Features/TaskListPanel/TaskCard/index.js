import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import TaskCardTime from './TaskCardTime';
import TaskCardContent from './TaskCardContent';

const TaskListContainer = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  width: 600px;
  background: ${({ theme }) => theme.colors.primaryBackground};
`;

class TaskCard extends React.Component { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  render() {
    const { task } = this.props;
    return (
      <TaskListContainer>
        <TaskCardTime date={task.date} priority={3} isRecurring />
        <TaskCardContent title={task.title} description={task.desc} />
      </TaskListContainer>
    );
  }
}

TaskCard.propTypes = {
  task: PropTypes.object,
};

export default TaskCard;
