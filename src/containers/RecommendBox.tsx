import React, { useState } from "react";
import styled from "styled-components";
import GlobalStyle from "../theme/GlobalStyle";

function RecommendBox() {
  return (
    <Wrapper>
      <RecommendButton>문제 풀기</RecommendButton>
      <RefreshButton>다시 추천 받기</RefreshButton>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 20em;
  height: 30em;
  border-radius: 1em;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  background-color: #e9e9e9;
  border-color: #5465ff;
  border: #5465ff;
`;

const RecommendButton = styled.button`
  width: 16em;
  height: 4em;
  border-radius: 1em;
  background-color: #5465ff;
  color: #ffffff;
  border-color: transparent;
  :hover {
    background-color: #bbbbbb;
  }
  cursor: pointer;
`;

const RefreshButton = styled.button`
  width: 16em;
  height: 4em;
  border-radius: 1em;
  background-color: #ffffff;
  margin-top: 1em;
  color: #5465ff;
  border-color: #5465ff;
  :hover {
    background-color: #bbbbbb;
  }
  cursor: pointer;
`;
export default RecommendBox;
