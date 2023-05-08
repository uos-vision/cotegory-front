import React, { useState } from "react";
import styled from "styled-components";
import GlobalStyle from "../theme/GlobalStyle";
import { useNavigate } from "react-router-dom";

interface Props {
  recommendTitle?: string;
  problemNumber?: string;
  problemTitle?: string;
  problemLink?: string;
}
function RecommendBox({
  recommendTitle,
  problemNumber,
  problemTitle,
  problemLink,
}: Props) {
  const navigate = useNavigate();
  // navigate(problemLink);

  return (
    <Wrapper>
      <GlobalStyle />
      <RecommendTitle>{recommendTitle}</RecommendTitle>
      <ProblemNumber>{problemNumber}번 문제</ProblemNumber>
      <ProblemTitle>{problemTitle}</ProblemTitle>
      <RecommendButton>
        <ButtonText>문제 풀기</ButtonText>
      </RecommendButton>
      <RefreshButton>
        <ButtonText>다시 추천 받기</ButtonText>
      </RefreshButton>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  height: 30em;
  border-radius: 1em;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  background-color: #eeeeee;
  border: #cdcdcd;
  border-style: solid;
  box-shadow: 0 0 0 2px #cdcdcd inset;
`;

const RecommendTitle = styled.h1`
  font-size: 2em;
`;

const ProblemNumber = styled.h2`
  font-size: 1.5em;
  color: #13c4a3;
`;

const ProblemTitle = styled.h2`
  font-size: 1.25em;
  color: #000000;
`;

const RecommendButton = styled.button`
  width: 60%;
  height: 4em;
  border-radius: 1em;
  background-color: #5465ff;
  color: #ffffff;
  margin-top: 3em;
  border-color: transparent;
  :hover {
    background-color: #bbbbbb;
  }
  cursor: pointer;
`;

const RefreshButton = styled.button`
  width: 60%;
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

const ButtonText = styled.h4`
  font-size: 1em;
`;
export default RecommendBox;
