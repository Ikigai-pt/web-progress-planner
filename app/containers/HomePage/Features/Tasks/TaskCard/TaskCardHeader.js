import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { PriorityIcon, RecurringIcon } from 'assets/images/icons';

const TaskCardHeaderContainer = styled.div`
  grid-column: 1 / span 13;
  background: #707070;
  display: inline-grid;
  grid-template-columns: 4fr 11fr 1fr;
  justify-content: center;
  align-items: center;
`;

const TaskSettings = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 10px;
  div {
    padding: 10px;
  }
`;

const Label = styled.h3`
  font-size: 16px;
  margin-left: 20px;
  color: white
`;

const ToggleButton = styled.div`
  color: white;
  margin-left: 10px;
  cursor: pointer;
  &hover {
    opacity: 0.6;
  }
`;

const PriorityStars = (priority) => {
  const starNodes = [];
  for (let i = 0; i < priority; i++) {
    starNodes.push(<PriorityIcon key={i} />);
  }
  return starNodes;
};

const TaskCardHeader = ({ priority, isRecurring, title, isExpanded, handleToggle }) =>
  <TaskCardHeaderContainer>
    <TaskSettings>
      <div>{PriorityStars(priority)} </div>
      {isRecurring ? <div><RecurringIcon /></div> : ''}
    </TaskSettings>
    <Label>{title}</Label>
    <ToggleButton className="material-icons" onClick={handleToggle}>
      { isExpanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
    </ToggleButton>
  </TaskCardHeaderContainer>;

TaskCardHeader.propTypes = {
  priority: PropTypes.number,
  isRecurring: PropTypes.bool,
  title: PropTypes.string,
  isExpanded: PropTypes.bool,
  handleToggle: PropTypes.func,
};

export default TaskCardHeader;
