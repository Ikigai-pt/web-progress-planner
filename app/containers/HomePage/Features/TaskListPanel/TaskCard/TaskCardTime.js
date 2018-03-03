import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { pxToRem } from 'components/pxToRem';

const TaskCardTimeContainer = styled.div`
  display: grid;
  grid-template-columns: 10% 90%;
  box-sizing: box-border;
`;

const Label = styled.p`
  margin: 0;
  padding: 0;
  display: inline;
  font-family: 'RobotoThin';
  font-size: ${pxToRem(48)};
  text-align: center;
  background: ${({ isActive, theme }) => isActive ? theme.colors.primary : theme.colors.primaryBackground};
`;

const AccentToLeft = styled.div`
  background: ${({ theme }) => theme.colors.primary};
`;

const TimeBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${({ isActive, theme }) => isActive ? theme.colors.primary : theme.colors.primaryBackground};
`;

const TaskCardTime = ({ date, isActive }) =>
  (<TaskCardTimeContainer isActive={isActive}>
    <AccentToLeft />
    <TimeBox>
      <Label> {format(date, 'hh:mm')} </Label>
      <Label> {format(date, 'aa').substring(0, 3).toUpperCase()} </Label>
    </TimeBox>
  </TaskCardTimeContainer>);

TaskCardTime.propTypes = {
  date: PropTypes.object,
  isActive: PropTypes.bool,
};

export default TaskCardTime;
