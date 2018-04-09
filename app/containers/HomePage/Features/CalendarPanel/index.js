import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import { pxToRem } from 'components/pxToRem';
import format from 'date-fns/format';
import { addMonths, subMonths, eachDay, addDays, subDays } from 'date-fns';

const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
  padding-bottom: ${pxToRem(16)};
`;

const MonthSectionWrapper = styled.div`
  display: flex;
  padding: ${pxToRem(8)};
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.p`
  margin: 0;
  font-size: ${pxToRem(24)};
  color: ${({ theme }) => theme.colors.sText};
`;


const SubTitle = styled.h3`
  margin: 0;
  font-size: ${pxToRem(16)};
  color: ${({ theme }) => theme.colors.sText};
  text-align: center;
`;

const MonthNavigationButton = ({ text, monthSelectHandler }) => <SubTitle onClick={() => monthSelectHandler()} > {text} </SubTitle>;

MonthNavigationButton.propTypes = {
  text: PropTypes.string,
  monthSelectHandler: PropTypes.func,
};

const DateSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${pxToRem(8)} ${pxToRem(24)};
`;

const DateCell = styled.div`
  color: ${({ theme }) => theme.colors.pText};
  background: ${({ theme }) => theme.colors.sText};
  height: 40px;
  width: 40px;
  h3 {
    display: block;
    margin: 0;
    padding-top: 4px;
    text-align: center;
    font-size: 20px;
  }
`;

const DateCellActive = styled(DateCell)`
  background: ${({ theme }) => theme.colors.primary};
`;

const Arrow = styled.div`
  width: 0;
  height: 0;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  cursor: pointer;
`;

const Next = styled(Arrow)`
  border-left:20px solid ${({ theme }) => theme.colors.primary};
`;

const Prev = styled(Arrow)`
  border-right:20px solid ${({ theme }) => theme.colors.primary};
`;

const DateCells = (dates, activeSelection, dayClickHandler) => dates.map((date) =>
  (activeSelection === format(date, 'YYYY-MM-DD')) ? <DateCellActive key={format(date, 'DD')} onClick={() => dayClickHandler(format(date, 'YYYY-MM-DD'))}><h3> {format(date, 'DD')} </h3></DateCellActive> :
  <DateCell key={format(date, 'DD')} onClick={() => dayClickHandler(format(date, 'YYYY-MM-DD'))}><h3> {format(date, 'DD')} </h3></DateCell>);

const MonthSection = (prev, current, next, monthClickHandler) =>
(<MonthSectionWrapper>
  <MonthNavigationButton text={format(prev, 'MMMM')} monthSelectHandler={() => monthClickHandler(prev)} />
  <Title>{current}</Title>
  <MonthNavigationButton text={format(next, 'MMMM')} monthSelectHandler={() => monthClickHandler(next)} />
</MonthSectionWrapper>);

class CalendarPanel extends React.PureComponent {

  monthClickHandler = this.monthClickHandler.bind(this);
  scrollDateHandler = this.scrollDateHandler.bind(this);
  dayClickHandler = this.dayClickHandler.bind(this);

  monthClickHandler(date) {
    this.props.updateDateHandler(date);
  }

  scrollDateHandler(direction, date) {
    if (direction === 'PREVIOUS') {
      this.props.updateDateHandler(subDays(date, 7));
    } else if (direction === 'NEXT') {
      this.props.updateDateHandler(addDays(date, 7));
    }
  }

  dayClickHandler(date) {
    this.props.dateClickHandler(date);
  }

  render() {
    const { midOfWeekDate, selectedDate } = this.props;
    const today = format(midOfWeekDate, 'YYYY-MM-DD');
    const activeSelection = format(selectedDate, 'YYYY-MM-DD');
    const nextMonth = addMonths(today, 1);
    const prevMonth = subMonths(today, 1);
    const currentMonth = `${format(today, 'MMMM')} '${format(today, 'YY')}`;
    const daysOfWeek = eachDay(subDays(today, 3), addDays(today, 3));

    return (
      <Wrapper>
        { MonthSection(prevMonth, currentMonth, nextMonth, this.monthClickHandler) }
        <DateSection>
          <Prev onClick={() => this.scrollDateHandler('PREVIOUS', midOfWeekDate)} />
          { DateCells(daysOfWeek, activeSelection, this.dayClickHandler) }
          <Next onClick={() => this.scrollDateHandler('NEXT', midOfWeekDate)} />
        </DateSection>
      </Wrapper>
    );
  }
}

CalendarPanel.propTypes = {
  midOfWeekDate: PropTypes.string,
  selectedDate: PropTypes.string,
  updateDateHandler: PropTypes.func,
  dateClickHandler: PropTypes.func,

};

export default CalendarPanel;
