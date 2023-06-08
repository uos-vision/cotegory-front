import React, { useState } from "react";
import styled from "styled-components";
import GlobalStyle from "../theme/GlobalStyle";

interface Props {
  topText?: string;
  bottomText?: string;
  topBoxColor?: string; // New prop for topBox background color
}

function ProblemBox({ topText, bottomText, topBoxColor }: Props) {
  return (
    <Wrapper>
      <GlobalStyle />
      <TopBox topBoxColor={topBoxColor}>
        <TopText>{topText}</TopText>
      </TopBox>
      <BottomBox>
        <BottomText>{bottomText}</BottomText>
      </BottomBox>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 4em;
`;

const TopBox = styled.div<{ topBoxColor?: string }>`
  border-radius: 1em 1em 0em 0em;
  background-color: ${(props) => props.topBoxColor || "#5465ff"};
  box-sizing: border-box;
`;

const BottomBox = styled.div`
  border-radius: 0em 0em 1em 1em;
  height: 3em;
  background-color: #ececec;
  box-sizing: border-box;
`;

const TopText = styled.h1`
  color: white;
  font-size: 2em;
  margin-top: 1em;
  margin-bottom: 1em;
  text-align: center;
`;

const BottomText = styled.h2`
  color: black;
  font-size: 1em;
  text-align: center;
`;

export default ProblemBox;
