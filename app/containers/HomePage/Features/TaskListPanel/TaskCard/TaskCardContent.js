import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TaskCardHeaderContainer = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  justify-content: flex-start;
  background: ${({ theme }) => theme.colors.primaryBackground};
`;

const TaskTitle = styled.p`
  margin: 0;
  padding: 4px;
  font-size: 24px;
`;

const TaskDescription = styled.p`
  margin: 0;
  padding: 4px;
  font-size: 16px;
  font-family: 'RobotoThin';
`;

// display: grid;
// grid-template-columns: 1fr 1fr;
// justify-items: end;
// justify-content: end;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 16px;
`;

const PlainButton = styled.button`
  width: 160px;
  height: 60px;
  font-size: 24px;
`;

const PrimaryButton = styled(PlainButton)`
  background: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const ActionPanel = () => <ButtonWrapper><PlainButton>SKIP</PlainButton> <PrimaryButton> DONE </PrimaryButton> </ButtonWrapper>;

const TaskCardContent = ({ title, description }) =>
  (<TaskCardHeaderContainer>
    <TaskTitle>{title} </TaskTitle>
    <TaskDescription> {description} </TaskDescription>
    {ActionPanel()}
  </TaskCardHeaderContainer>);

TaskCardContent.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default TaskCardContent;
