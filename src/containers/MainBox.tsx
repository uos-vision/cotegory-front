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
  align-items: center;
  flex-direction: column;
`;

const TopBox = styled.div`
  border-radius: 16px 16px 0px 0px;
  background-color: #5465ff;
  width: 1320px;
  height: 100px;
`;

const BottomBox = styled.div`
  border-radius: 0px 0px 16px 16px;
  background-color: #788bff;
  height: 50px;
  width: 1320px;
`;

const TopText = styled.h1`
  color: white;
  font-size: 24px;
  text-align: center;
`;

const BottomText = styled.h2`
  color: white;
  font-size: 16px;
  text-align: center;
`;

export default MainBox;
