import styled from 'styled-components';
import React from 'react';
import { pxToRem } from 'components/pxToRem';
import CollageImage from 'assets/images/collage.jpg';

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 0;
  background: ${({ theme }) => theme.colors.primary};
  box-sizing: border-box;
  min-width: 500px;
`;

const Collage = styled.div`
  min-width: 40%;
  min-height: 40%;
  background-image: url(${CollageImage});
  border: 2px solid ${({ theme }) => theme.colors.sText};
`;

const Title = styled.h3`
  font-size: ${pxToRem(20)};
  margin: 0px;
`;

const ScoreBox = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  align-items: center;
  margin-left: 8px;
`;

const ScoreTop = styled(Title)`
  font-size: ${pxToRem(72)};
  text-align: center;
  margin-left: -30px;
`;

const ScoreBottom = styled(Title)`
  font-size: ${pxToRem(48)};
  margin-left: 40px;
  margin-top: -40px;
`;

const ScoreBoard = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  align-items: center;
`;

const Divider = styled.div`
  width: 140px;
  border-bottom: 3px solid black;
  -webkit-transform:
      translateY(30px)
      translateX(-10px)
      rotate(-45deg);
  position: relative;
  top: -60px;
  left: 10px;
`;

const ScoreBoardView = (title, top, bottom) =>
  (<ScoreBoard>
    <Title> {title} </Title>
    <ScoreBox>
      <ScoreTop> {top} </ScoreTop>
      <Divider />
      <ScoreBottom> {bottom}</ScoreBottom>
    </ScoreBox>
  </ScoreBoard>);

const LiveFeed = () =>
  (<Wrapper>
    <Collage />
    { ScoreBoardView('TASKS', 6, 10) }
    { ScoreBoardView('TODOS', 3, 15) }
  </Wrapper>);

export default LiveFeed;
