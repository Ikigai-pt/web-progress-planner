import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TaskCardTimeContainer = styled.div`
  grid-column: 1 / 3;
  grid-row: 2 / 3;
  display: grid;
  margin: 10px;
  content-justify: center;
  background: #ffff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const Label = styled.h3`
  font-family: 'Copperplate Gothic Light';
  font-size: 16px;
  text-align: center;
`;

const Hour = styled(Label)`
  font-size: 16px;
`;

const Minute = styled(Label)`
  font-size: 14px;
`;

const TaskCardTime = ({ hour, minutes, period }) =>
  <TaskCardTimeContainer>
    <div>
      <Hour> {hour} </Hour>
      <Minute> {minutes} </Minute>
    </div>
    <Label> {period} </Label>
  </TaskCardTimeContainer>;

TaskCardTime.propTypes = {
  hour: PropTypes.string,
  minutes: PropTypes.string,
  period: PropTypes.string,
};

export default TaskCardTime;
