import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';
import { startOfMonth, addDays } from 'date-fns';
import { pxToRem } from 'components/pxToRem';
import { MinimizeIcon, MaximizeIcon } from 'assets/images/icons';
import LiveFeed from './LiveFeed';
import HistoryFeed from './HistoryFeed';
import SocialFeed from './SocialFeed';
import CalendarPanel from '../CalendarPanel';

const HighLight = styled.div`
  height: 40px;
  background: ${({ theme }) => theme.colors.secondaryDark};
  width: 100%;
  box-sizing: border-box;
`;

const SummaryWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-flow: column nowrap;
  justify-content: space-around;
  max-height: ${({ isExpanded }) => isExpanded ? '320px' : '0px'};
  background: ${({ theme }) => theme.colors.secondary};
  transition:${({ isExpanded }) => isExpanded ? 'all 0.25s ease-in-out' : 'all 0.25s ease-in-out'};
  transform: ${({ isExpanded }) => isExpanded ? 'scaleY(1)' : 'scaleY(0)'};
  opacity: ${({ isExpanded }) => isExpanded ? '1' : '0'};
  transform-origin:top;
`;

const FeedWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  height: ${pxToRem(200)};
  width: 100%;
  justify-content: space-around;
  padding: 16px;
`;

const MinimizeButton = styled(MinimizeIcon)`
  width: 48px;
  height: 40px;
  color: ${({ theme }) => theme.colors.sText};
  float: right;
`;

const MaximizeButton = styled(MaximizeIcon)`
  width: 48px;
  height: 40px;
  color: ${({ theme }) => theme.colors.sText};
  float: right;
`;

class SummaryPanel extends React.PureComponent {
  state = { isExpanded: true, midOfWeekDate: format(new Date(), 'YYYY-MM-DD'), selectedDate: format(new Date(), 'YYYY-MM-DD') }

  toggleHandler = this.toggleHandler.bind(this);
  updateDateHandler = this.updateDateHandler.bind(this);
  dateClickHandler = this.dateClickHandler.bind(this);

  toggleHandler() {
    const isExpandedNow = !this.state.isExpanded;
    this.setState({ isExpanded: isExpandedNow });
  }

  updateDateHandler(date) {
    const newSelectedDate = format(startOfMonth(date), 'YYYY-MM-DD');
    const newDate = addDays(newSelectedDate, 3);
    this.setState({ midOfWeekDate: format(newDate, 'YYYY-MM-DD'), selectedDate: format(newSelectedDate, 'YYYY-MM-DD') });
  }

  dateClickHandler(newDate) {
    this.setState({ selectedDate: format(newDate, 'YYYY-MM-DD') });
  }
  render() {
    const { isExpanded } = this.state;
    return (
      <div>
        <HighLight> { isExpanded ? <MinimizeButton onClick={() => this.toggleHandler()} /> : <MaximizeButton onClick={() => this.toggleHandler()} /> }</HighLight>
        <SummaryWrapper isExpanded={isExpanded}>
          <FeedWrapper>
            <LiveFeed />
            <HistoryFeed />
            <SocialFeed />
          </FeedWrapper>
          <CalendarPanel midOfWeekDate={this.state.midOfWeekDate} selectedDate={this.state.selectedDate} dateClickHandler={this.dateClickHandler} updateDateHandler={this.updateDateHandler} />
        </SummaryWrapper>
      </div>
    );
  }
}

SummaryPanel.propTypes = {
  imageUrl: PropTypes.string,
  liveFeed: PropTypes.object,
  historyFeed: PropTypes.object,
  habitFeed: PropTypes.object,
  socialFeed: PropTypes.object,
};

export default SummaryPanel;

