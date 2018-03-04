import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TaskCard from './TaskCard';
import WeeklyHabitsGridPanel from '../Habits';
// Naming convention Domain.Page/Context.Component.Type
// Sidebar, SidebarSwitch, ChatConversation, ACommunityAddToShortlistButton

const TasksAndHabitsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 20px;
`;

const TaskCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 20px;
  overflow-y: scroll;
  height: 800px;
`;

class TimelinePanel extends React.Component {
  state = { isExpanded: true }
  expandHandler = this.toggleExpandHandler.bind(this);

  toggleExpandHandler() {
    const isExpandedNow = !this.state.expandHandler;
    this.setState({ isExpanded: isExpandedNow });
  }

  render() {
    const tasks = [
      { id: 1, title: 'Go to gym', desc: '  Abs workout  fjsldfkfskfs dkfljlkkjldshuffhifurf fjsdffuwybfasHDfbfhb fsfdsjfs Abs workout  fjsldfkfskfs dkfljlkkjldshuffhifurf fjsdffuwybfasHDfbfhb fsfdsjfs ', date: new Date() },
      { id: 2, title: 'Go to gym', desc: '  Abs workout  fjsldfkfskfs dkfljlkkjldshuffhifurf fjsdffuwybfasHDfbfhb fsfdsjfs Abs workout  fjsldfkfskfs dkfljlkkjldshuffhifurf fjsdffuwybfasHDfbfhb fsfdsjfs ', date: new Date() },
      { id: 3, title: 'Go to gym', desc: '  Abs workout  fjsldfkfskfs dkfljlkkjldshuffhifurf fjsdffuwybfasHDfbfhb fsfdsjfs Abs workout  fjsldfkfskfs dkfljlkkjldshuffhifurf fjsdffuwybfasHDfbfhb fsfdsjfs ', date: new Date() },
      { id: 4, title: 'Go to gym', desc: '  Abs workout  fjsldfkfskfs dkfljlkkjldshuffhifurf fjsdffuwybfasHDfbfhb fsfdsjfs Abs workout  fjsldfkfskfs dkfljlkkjldshuffhifurf fjsdffuwybfasHDfbfhb fsfdsjfs ', date: new Date() },
      { id: 5, title: 'Go to gym', desc: '  Abs workout  fjsldfkfskfs dkfljlkkjldshuffhifurf fjsdffuwybfasHDfbfhb fsfdsjfs Abs workout  fjsldfkfskfs dkfljlkkjldshuffhifurf fjsdffuwybfasHDfbfhb fsfdsjfs ', date: new Date() },
      { id: 6, title: 'Go to gym', desc: '  Abs workout  fjsldfkfskfs dkfljlkkjldshuffhifurf fjsdffuwybfasHDfbfhb fsfdsjfs Abs workout  fjsldfkfskfs dkfljlkkjldshuffhifurf fjsdffuwybfasHDfbfhb fsfdsjfs ', date: new Date() },
      { id: 7, title: 'Go to gym', desc: '  Abs workout  fjsldfkfskfs dkfljlkkjldshuffhifurf fjsdffuwybfasHDfbfhb fsfdsjfs Abs workout  fjsldfkfskfs dkfljlkkjldshuffhifurf fjsdffuwybfasHDfbfhb fsfdsjfs ', date: new Date() },
      { id: 8, title: 'Go to gym', desc: '  Abs workout  fjsldfkfskfs dkfljlkkjldshuffhifurf fjsdffuwybfasHDfbfhb fsfdsjfs Abs workout  fjsldfkfskfs dkfljlkkjldshuffhifurf fjsdffuwybfasHDfbfhb fsfdsjfs ', date: new Date() }];

    return (
      <TasksAndHabitsWrapper>
        <TaskCardContainer>
          { tasks.map((task) => <TaskCard key={task.id} task={task} />) }
        </TaskCardContainer>
        <WeeklyHabitsGridPanel />
      </TasksAndHabitsWrapper>
    );
  }
}

TimelinePanel.propTypes = {
  tasks: PropTypes.array,
};

export default TimelinePanel;

