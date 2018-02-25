import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderLink = styled(Link)`
  display: inline-flex;
  margin: 1em;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
`;

export const HeaderTitle = styled.h3`
  font-size: 24px;
  text-align: center;
`;

