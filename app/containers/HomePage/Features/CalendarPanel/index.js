/*
 * Calendar panel has a heading (Month)
 * Header panel has right & left scroll for Months
 * Body panel has dates & Right & left scroll (for days and months)
 */

import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import { format, subMonths, addMonths, startOfMonth, endOfMonth, eachDay } from 'date-fns';

const CalendarPanelContainer = styled.div`
  display: grid;
  grid-template-column: 1fr;
`;

const CalendarPanelHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 14fr 1fr;
  justify-content: center;
  align-items: center;
`;

const CalendarPanelBody = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(31, 1fr);
  grid-column-gap: 5px;
  align-items: center;
`;

const DateItem = styled.div`
  font-size: 24px;
  margin-left: -1px;
  max-width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 1px solid gray;
  text-align: center;
  &:hover {
    border: '1px solid gray'
  }
`;

const PrevBtn = styled(DateItem)`
  background: gray;
`;

const PrevMonth = (text) => <div><button>{text}</button></div>;
const NextMonth = (text) => <div><button>{text }</button></div>;
const DateItemView = (dates) =>
  dates.map((date) => <DateItem key={date}> <div>{format(date, 'D')} </div></DateItem>);

class CalendarPanel extends React.PureComponent {  // eslint-disable-line react/prefer-stateless-function
  scrollMonthHandler = this.scrollMonthHandler.bind(this);

  // dispatch events to fetch tasks by Month
  scrollMonthHandler(direction) {

  }

  // dispatch events to fetch tasks by week -1/+1
  // and update month label accordingly
  scrollDayHandler(direction) {

  }

  render() {
    const date = new Date();
    const month = format(date, 'MMMM');
    const prevMonth = format(subMonths(date, 1), 'MMMM');
    const nextMonth = format(addMonths(date, 1), 'MMMM');
    const dates = eachDay(startOfMonth(date), endOfMonth(date));
    console.log(prevMonth, nextMonth)
    console.log(dates)
    console.log(month)
    return (
      <CalendarPanelContainer>
        <CalendarPanelHeader>
          {PrevMonth(prevMonth)}
          <div>{ month } </div>
          {NextMonth(nextMonth)}
        </CalendarPanelHeader>
        <CalendarPanelBody>
          <PrevBtn> {'<<'} </PrevBtn>
          { DateItemView(dates) }
          <PrevBtn> {'>>'} </PrevBtn>
        </CalendarPanelBody>
      </CalendarPanelContainer>
    );
  }
}

CalendarPanel.propTypes = {
  date: PropTypes.string,
};

export default CalendarPanel;
