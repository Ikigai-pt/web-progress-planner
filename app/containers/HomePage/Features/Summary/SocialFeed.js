import styled from 'styled-components';
import React from 'react';
import { pxToRem } from 'components/pxToRem';

const Wrapper = styled.div`
  margin: 0;
  box-sizing: border-box;
`;

const Table = styled.table`
  font-size: ${pxToRem(20)};
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.sText};
`;

const Title = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.sText};
  font-size: ${pxToRem(20)};
  text-align: left;
`;

const Suffix = styled.span`
  color: ${({ theme }) => theme.colors.sText};
  font-size: ${pxToRem(14)};
  text-align: right;
`;

const DotUL = styled.ul`
  list-style: none;
  font-size: ${pxToRem(16)};
  li:before {
    content:" ■ ";
    color: ${({ theme }) => theme.colors.social};
}
`;

const LineUL = styled.ul`
  list-style: none;
  font-size: ${pxToRem(16)};
  li:before {
    content: " | ";
    color: ${({ theme }) => theme.colors.social};
}
`;

const SocialFeed = () =>
  (<Wrapper>
    <Title> SOCIAL </Title>
    <Table>
      <tbody>
        <tr>
          <td>
            <DotUL>
              <li>Alice</li>
              <li>Bob</li>
              <li>Gopal</li>
              <li>Nisha</li>
            </DotUL>
          </td>
          <td>
            <LineUL>
              <li>30 <Suffix>Tasks</Suffix></li>
              <li>30 <Suffix>Tasks</Suffix></li>
              <li>30 <Suffix>Tasks</Suffix></li>
              <li>30 <Suffix>Tasks</Suffix></li>
            </LineUL>
          </td>
        </tr>
      </tbody>
    </Table>
  </Wrapper>);

export default SocialFeed;
