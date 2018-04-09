import styled from 'styled-components';
import React from 'react';
import { pxToRem } from 'components/pxToRem';

const Wrapper = styled.div`
  margin: 0;
  box-sizing: border-box;
`;

const Table = styled.table`
  font-size: ${pxToRem(20)};
  margin: 0px;
  color: ${({ theme }) => theme.colors.sText};
  th {
    font-size: ${pxToRem(16)};
    padding: 8px;
  }
`;

const Title = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.sText};
  font-size: ${pxToRem(20)};
`;

const TD = styled.td`
  color: ${({ theme }) => theme.colors.sText};
  font-size: ${pxToRem(16)};
  text-align: right;
  padding: 8px;
`;

const PositiveTD = styled(TD)`
  font-size: ${pxToRem(20)};
  color: ${({ theme }) => theme.colors.ok};
`;

const NegativeTD = styled(TD)`
  font-size: ${pxToRem(20)};
  color: ${({ theme }) => theme.colors.danger};
`;

const HistoryFeed = () =>
  (<Wrapper>
    <Title> LAST WEEK </Title>
    <Table>
      <thead>
        <tr>
          <th></th>
          <th> DONE</th>
          <th> SKIPPED</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>TASKS</th>
          <PositiveTD>20</PositiveTD>
          <NegativeTD>12</NegativeTD>
        </tr>
        <tr>
          <th>TODOS</th>
          <PositiveTD>12</PositiveTD>
          <NegativeTD>31</NegativeTD>
        </tr>
      </tbody>
    </Table>
  </Wrapper>);

export default HistoryFeed;
