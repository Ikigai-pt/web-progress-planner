import styled from 'styled-components';
import { pxToRem } from 'components/pxToRem';

export default styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  max-height: ${pxToRem(48)};
  padding: ${pxToRem(8)};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.secondaryDark};
  flex-basis: 48px;
  z-index: 9;
`;

