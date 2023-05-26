import React, { useState } from "react";
import styled from "styled-components";
import GlobalStyle from "../theme/GlobalStyle";

interface Props {
  topText?: string;
  bottomText?: string;
  topColor: string;
  topBoxColor: string;
}

function AnswerBox({ topText, topColor, topBoxColor }: Props) {
  return (
    <Wrapper>
      <GlobalStyle />
      <TopBox topBoxColor={topBoxColor}>
        <TopText topColor={topColor}>{topText}</TopText>
      </TopBox>
      <BottomBox></BottomBox>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 2em;
`;

const TopBox = styled.div<{ topBoxColor: string }>`
  border-radius: 1em 1em 0em 0em;
  background-color: ${(props) => props.topBoxColor};
  box-sizing: border-box;
`;

const BottomBox = styled.div`
  border-radius: 0em 0em 1em 1em;
  background-color: #ececec;
  box-sizing: border-box;
`;

const TopText = styled.h1<{ topColor: string }>`
  color: ${(props) => props.topColor};
  font-size: 1em;
  margin-top: 1em;
  margin-bottom: 1em;
  text-align: left;
  padding-left: 1em;
  padding-right: 1em;
`;

export default AnswerBox;
