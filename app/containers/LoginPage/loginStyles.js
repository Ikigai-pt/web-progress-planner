import styled from 'styled-components';
import { FacebookIcon, GoogleIcon } from 'assets/images/social';

export const LoginContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 2fr 1fr;
  background: #fafafa;
  height: 100%;
`;

export const BlankPanel = styled.div`
  background: #fafafa;
  height: 200px;
`;

export const LoginPanel = styled(LoginContainer)`
  display: grid;
  grid-template-rows: 1fr;
  grid-row-gap: 10px;
  background: #4F9A94;
  align-items: start;
  justify-items: center;
  width: 100%;
  padding: 20px;
  > h3 {
    margin-top: 40px;
  }
`;

export const Title = styled.h3`
  font-family: 'RobotoLight';
  font-size: 26px;
`;

export const TextBox = styled.input`
  padding-left: 20px;
  width: 380px;
  height: 40px;
  background: #fafafa;
`;

export const Button = styled.div`
  width: 160px;
  height: 45px;
  background: #82E9DE;
  color: #424242;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
`;

export const LoginButton = styled(Button)`
  margin: 5px;
  align-items: center;
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

