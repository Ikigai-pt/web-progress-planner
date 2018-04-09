
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 32px;
`;

const TitlePanel = styled.div`
  display: grid;
  grid-template-columns: .5% 99.5%;
  grid-column-gap: 10px;
  box-sizing: box-border;
  margin-bottom: 16px;
`;

const AccentToLeft = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
`;

const Title = styled.p`
  margin: 0;
  font-size: 32px;
  font-family: 'RobotoThin';
`;

const Text = styled(Title)`
  font-size: 20px;
`;

const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: 10% 90%;
  grid-column-gap: 10px;
  box-sizing: box-border;
  padding: 8px;
  margin-left: 16px;
`;

const CheckBox = styled.div`
  background-color: ${({ status, theme }) => status ? theme.colors.secondary : theme.colors.primaryBackground};
  display: inline-block;
  width: 32px;
  height: 32px;
  border: 1px solid ${({ theme }) => theme.colors.secondaryDark};
`;

const Item = ({ text, status }) => <ItemContainer> <CheckBox status={status} /> <Text> isDone {status} {text} </Text> </ItemContainer>;

Item.propTypes = {
  text: PropTypes.string,
  status: PropTypes.bool,
};

const ItemList = (items) => items.map((item) => <Item key={item.id} text={item.text + item.isDone} status={item.isDone} />);
// Naming convention Domain.Page/Context.Component.Type
// Sidebar, SidebarSwitch, ChatConversation, ACommunityAddToShortlistButton
class FocusTasksListPanel extends React.Component {
  state = { isExpanded: true }
  expandHandler = this.toggleExpandHandler.bind(this);

  toggleExpandHandler() {
    const isExpandedNow = !this.state.expandHandler;
    this.setState({ isExpanded: isExpandedNow });
  }

  render() {
    const items = [
      {
        id: 1,
        text: 'fdfjlfkd jfdklfks jldsfkflsa',
        isDone: true,
      },
      {
        id: 2,
        text: 'fdfjlfkd jfdklfks jldsfkflsa',
        isDone: true,
      },
      {
        id: 3,
        text: 'fdfjlfkd jfdklfks jldsfkflsa',
        isDone: false,
      },
      {
        id: 4,
        text: 'fjdklf fsdljfdskf fkssdfiwfnksd fhsdfofnofljnsdf fsdflsfksfksjf hfuiwhfwnefiowrfhwrf fhowfowrofrgrwo',
        isDone: false,
      },
      {
        id: 5,
        text: 'fdfjlfkd jfdklfks jldsfkflsa',
        isDone: true,
      },
    ];

    return (
      <Wrapper>
        <TitlePanel>
          <AccentToLeft />
          <Title> {this.props.title} </Title>
        </TitlePanel>
        { ItemList(items) }
      </Wrapper>
    );
  }
}

FocusTasksListPanel.propTypes = {
  title: PropTypes.string,
};

export default FocusTasksListPanel;
