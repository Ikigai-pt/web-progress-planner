
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { pxToRem } from 'components/pxToRem';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 10px;
  padding: 8px;
  background: ${({ theme }) => theme.colors.secondary};
  box-sizing: border-box;
`;

const Table = styled.table`
  font-size: ${pxToRem(20)};
  color: ${({ theme }) => theme.colors.sText};
  th {
    font-size: ${pxToRem(16)};
    padding: 8px;
  }
`;

const Tile = styled.div`
  height: 48px;
  width: 64px;
  padding: 8px;
  background: ${({ status, theme }) => status ? theme.colors.primary : theme.colors.secondaryDark};
  color: ${({ status, theme }) => status ? theme.colors.pText : theme.colors.sText};
  p {
  font-size: ${pxToRem(12)};
  text-align: center;
  }
`;

const HTile = styled(Tile)`
  color: ${({ theme }) => theme.colors.pText};
  background: ${({ theme }) => theme.colors.sText};
  font-size: 24px;
`;

const Title = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.sText};
  font-size: ${pxToRem(20)};
  text-align: left;
`;

const TD = styled.td`
  color: ${({ theme }) => theme.colors.sText};
  font-size: ${pxToRem(16)};
  text-align: center;
  padding: 8px;
`;

const HabitGridContainer = styled.div`
  padding: 0;
  margin-left: 24px;
  display: flex;
  justify-content: space-between;
`;

const HabitHeading = () =>
  (<thead>
    <tr>
      <th></th>
      <th><HTile>M</HTile></th>
      <th><HTile>T</HTile></th>
      <th><HTile>W</HTile></th>
      <th><HTile>Th</HTile></th>
      <th><HTile>F</HTile></th>
      <th><HTile>S</HTile></th>
      <th><HTile>Su</HTile></th>
    </tr>
  </thead>);

const HabitGrid = (habits) => habits.map((habit) => <tr><th>{habit.name}</th>{ habit.days.map((day) => <TD ><Tile status={day.status}><p>{day.data}</p></Tile></TD>) }</tr>);

// Naming convention Domain.Page/Context.Component.Type
// Sidebar, SidebarSwitch, ChatConversation, ACommunityAddToShortlistButton
class WeeklyHabitsGridPanel extends React.Component {
  state = { isExpanded: true }
  expandHandler = this.toggleExpandHandler.bind(this);

  toggleExpandHandler() {
    const isExpandedNow = !this.state.expandHandler;
    this.setState({ isExpanded: isExpandedNow });
  }

  render() {
    const habits = [
      { name: 'Gym',
        days: [
          { date: '2018-04-01', status: true, data: '30 mins' },
          { date: '2018-04-01', status: true, data: '30 mins' },
          { date: '2018-04-01', status: false, data: '30 mins' },
          { date: '2018-04-01', status: true, data: '30 mins' },
          { date: '2018-04-01', status: false, data: '30 mins' },
          { date: '2018-04-01', status: true, data: '30 mins' },
          { date: '2018-04-01', status: false, data: '30 mins' },
        ] },
      { name: 'Book',
        days: [
          { date: '2018-04-01', status: true, data: '30 mins' },
          { date: '2018-04-01', status: false, data: '30 mins' },
          { date: '2018-04-01', status: false, data: '30 mins' },
          { date: '2018-04-01', status: true, data: '30 mins' },
          { date: '2018-04-01', status: false, data: '30 mins' },
          { date: '2018-04-01', status: true, data: '30 mins' },
          { date: '2018-04-01', status: true, data: '30 mins' },
        ] },
    ];

    return (
      <Wrapper>
        <Title> HABITS </Title>
        <HabitGridContainer>
          <Table>
            { HabitHeading() }
            <tbody>
              { HabitGrid(habits) }
            </tbody>
          </Table>
        </HabitGridContainer>
      </Wrapper>
    );
  }
}

WeeklyHabitsGridPanel.propTypes = {
  tasks: PropTypes.array,
};

export default WeeklyHabitsGridPanel;
