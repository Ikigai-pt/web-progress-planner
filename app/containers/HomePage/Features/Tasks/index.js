import React from 'react';
import PropTypes from 'prop-types';
import TaskCard from './TaskCard';
// Naming convention Domain.Page/Context.Component.Type
// Sidebar, SidebarSwitch, ChatConversation, ACommunityAddToShortlistButton
class TimelinePanel extends React.Component {
  state = { isExpanded: true }
  expandHandler = this.toggleExpandHandler.bind(this);

  toggleExpandHandler() {
    const isExpandedNow = !this.state.expandHandler;
    this.setState({ isExpanded: isExpandedNow });
  }

  render() {
    const tasks = [
      { title: 'Go to gym', desc: '  Abs workout  fjsldfkfskfs dkfljlkkjldshuffhifurf fjsdffuwybfasHDfbfhb fsfdsjfs Abs workout  fjsldfkfskfs dkfljlkkjldshuffhifurf fjsdffuwybfasHDfbfhb fsfdsjfs ', date: new Date() },
      { title: 'Go to gym', desc: '  Abs workout  fjsldfkfskfs dkfljlkkjldshuffhifurf fjsdffuwybfasHDfbfhb fsfdsjfs Abs workout  fjsldfkfskfs dkfljlkkjldshuffhifurf fjsdffuwybfasHDfbfhb fsfdsjfs ', date: new Date() },
      { title: 'Go to gym', desc: '  Abs workout  fjsldfkfskfs dkfljlkkjldshuffhifurf fjsdffuwybfasHDfbfhb fsfdsjfs Abs workout  fjsldfkfskfs dkfljlkkjldshuffhifurf fjsdffuwybfasHDfbfhb fsfdsjfs ', date: new Date() }];

    return (
      <div>
        { tasks.map((task, i) => <TaskCard key={i} task={task} />) }
      </div>
    );
  }
}

TimelinePanel.propTypes = {
  tasks: PropTypes.array,
};

export default TimelinePanel;

