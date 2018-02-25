import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import TaskCardTime from './TaskCardTime';

const TaskCardBodyContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  grid-template-rows: repeat(3, auto);
  grid-column-gap: 10px;
  content-justify: center;
  background: #EFEFEF;
`;

const TaskDescription = styled.p`
  grid-column: 3 / 13;
  grid-row: 1 / 3;
  color: black;
  text-align: left;
`;

const TaskCardBody = ({ task }) =>
  <TaskCardBodyContainer>
    <TaskCardTime hour={format(task.date, 'HH')} minutes={format(task.date, 'mm')} period={format(task.date, 'aa')} />
    <TaskDescription> { task.desc } </TaskDescription>
  </TaskCardBodyContainer>;

TaskCardBody.propTypes = {
  task: PropTypes.object,
};

export default TaskCardBody;
