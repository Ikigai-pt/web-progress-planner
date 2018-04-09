import styled from 'styled-components';
import { FacebookIcon, GoogleIcon } from 'assets/images/social';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background: ${({ theme }) => theme.colors.sText};
`;

export const BlankPanel = styled.div`
  margin: 0 ,auto;
  background: ${({ theme }) => theme.colors.secondaryDark};
  height: 10vh;
`;

export const FooterPanel = styled(BlankPanel)`
  height: 20vh;
`;

export const CenterPanel = styled(LoginContainer)`
  display: flex;
  flex-stretch: 1;
  justify-content: start;
  margin-left: 30%;
  width: 40vw;
`;

export const LoginPanel = styled.div`
  display: grid;
  grid-row-gap: 0;
  margin-top: 10%;
  grid-template-columns: 1fr;
  width: 400px;
  height: 500px;
  align-self: center;
  background: ${({ theme }) => theme.colors.secondaryDark};
  align-items: center;
  justify-items: center;
  padding: 20px;
`;

export const Logo = styled.img`
  margin-top: 48px;
  width: 10vw;
  height: 10vw;
`;

export const Title = styled.h3`
  margin: 0px;
  font-family: 'RobotoThin';
  font-size: 26px;
  color: ${({ theme }) => theme.colors.sText};
`;

export const SubTitle = styled(Title)`
  font-size: 20px;
`;

export const TextBox = styled.input`
  padding-left: 20px;
  width: 380px;
  height: 40px;
  background: #fafafa;
`;

export const LoginButton = styled.div`
  margin: 0;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.pText};
  padding: 24px;
  width: 240px;
  height: 72px;
  text-align: center;
`;

export const LinkBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 40px;
  justify-items: space-around;
`;

export const LinkText = styled.span`
  font-size: 14px;
  color: #424242;
  border-bottom: 1px solid rgba(0, 0, 0, .2);;
`;

// export const SocialLogin = styled.div`
//   height: 40px;
//   width: 120px;
//   opacity: 0.6;
//   font-size:18px;
//   background: white;
// `;

export const SpacedTwoColumn = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 40px;
  justify-items: space-around;
`;

export const SocialLogin = styled(SpacedTwoColumn)`
  grid-template-columns: 1fr 3fr;
  grid-column-gap: 1px;
  padding: 5px;
  height: 40px;
  width: 120px;
  opacity: 0.5;
  font-size:18px;
  background: #82E9DE;
  a {
      color: black;
  }
`;

export const FacebookLogo = styled(FacebookIcon)`
  height: 24px;
  width : 24px;
`;

export const GoogleLogo = styled(GoogleIcon)`
  height: 24px;
  width : 24px;
  & use {
    fill: back;
  }
`;

