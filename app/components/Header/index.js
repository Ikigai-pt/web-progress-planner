import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { MenuIcon, ProfileIcon } from 'assets/images/icons';
import NavBar from './NavBar';
import { HeaderLink, HeaderTitle } from './Heading';
import messages from './messages';

const ProfileLogoWrapper = styled.div`
  margin-right: 8px;
  cursor: pointer;
`;

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <NavBar>
        <HeaderLink to="/home">
          <MenuIcon />
        </HeaderLink>
        <HeaderTitle>
          <FormattedMessage {...messages.title} />
        </HeaderTitle>
        <ProfileLogoWrapper>
          <ProfileIcon />
        </ProfileLogoWrapper>
      </NavBar>
    );
  }
}

export default Header;
