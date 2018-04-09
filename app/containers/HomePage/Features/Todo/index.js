
import React from 'react';
import PropTypes from 'prop-types';
// Naming convention Domain.Page/Context.Component.Type
// Sidebar, SidebarSwitch, ChatConversation, ACommunityAddToShortlistButton
class TasksListPanel extends React.Component {
  state = { isExpanded: true }
  expandHandler = this.toggleExpandHandler.bind(this);

  toggleExpandHandler() {
    const isExpandedNow = !this.state.expandHandler;
    this.setState({ isExpanded: isExpandedNow });
  }

  render() {
    return (
      <div> This is tasks</div>
    );
  }
}

TasksListPanel.propTypes = {
  tasks: PropTypes.array,
};

export default TasksListPanel;
