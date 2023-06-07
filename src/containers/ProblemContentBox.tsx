import React, { useState } from "react";
import styled from "styled-components";
import GlobalStyle from "../theme/GlobalStyle";

interface Props {
  topText?: string;
  bottomText?: string | any;
}
function ProblemContentBox({ topText, bottomText }: Props) {
  return (
    <Wrapper>
      <GlobalStyle />
      <TopBox>
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
  margin-top: 2em;
`;

const TopBox = styled.div`
  border-radius: 1em 1em 0em 0em;
  background-color: #788bff;
  box-sizing: border-box;
`;

const BottomBox = styled.div`
  border-radius: 0em 0em 1em 1em;
  background-color: #fafafa;
  box-sizing: border-box;
`;

const TopText = styled.h1`
  color: white;
  font-size: 1em;
  margin-top: 1em;
  margin-bottom: 1em;
  text-align: left;
  padding-left: 1em;
  padding-right: 1em;
`;

const BottomText = styled.p`
  color: black;
  font-size: 1em;
  text-align: left;
  padding-left: 1em;
  padding-right: 1em;
`;

export default ProblemContentBox;
