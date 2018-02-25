import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { ProgressPlannerLogo, ProfileLogo } from 'assets/images';
import NavBar from './NavBar';
import { HeaderLink, HeaderTitle } from './HeaderLink';
import messages from './messages';

const ProfileLogoWrapper = styled.div`
  display: grid;
  align-self: center;
  justify-items: end;
  margin-right: 1em;
  cursor: pointer;
`;

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <NavBar>
        <HeaderLink to="/home">
          <ProgressPlannerLogo />
        </HeaderLink>
        <HeaderTitle>
          <FormattedMessage {...messages.title} />
        </HeaderTitle>
        <ProfileLogoWrapper>
          <ProfileLogo />
        </ProfileLogoWrapper>
      </NavBar>
    );
  }
}

export default Header;
