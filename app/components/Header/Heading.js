import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderLink = styled(Link)`
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  margin-left: 8px;
`;

export const HeaderTitle = styled.h3`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.sText};
  text-align: center;
`;

