import React, { useState } from "react";
import styled from "styled-components";
import GlobalStyle from "../theme/GlobalStyle";

function MainBox() {
  return (
    <Wrapper>
      <GlobalStyle />
      <TopBox>
        <TopText>코테고리 검사 풀기</TopText>
      </TopBox>
      <BottomBox>
        <BottomText>코테고리 검사</BottomText>
      </BottomBox>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-top: 1em;
`;

const TopBox = styled.div`
  border-radius: 1em 1em 0em 0em;
  background-color: #5465ff;
  box-sizing: border-box;
`;

const BottomBox = styled.div`
  border-radius: 0em 0em 1em 1em;
  background-color: #788bff;
  box-sizing: border-box;
`;

const TopText = styled.h1`
  color: white;
  font-size: 1.5em;
  text-align: center;
`;

const BottomText = styled.h2`
  color: white;
  font-size: 1em;
  text-align: center;
`;

export default MainBox;
