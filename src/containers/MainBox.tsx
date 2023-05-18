import React, { useState } from "react";
import styled from "styled-components";
import GlobalStyle from "../theme/GlobalStyle";
import { useNavigate } from "react-router-dom";

interface Props {
  topText?: string;
  bottomText?: string;
  secondText?: string;
  textLink?: string;
}

function MainBox({ topText, bottomText, secondText }: Props) {
  const navigate = useNavigate();
  const handleNavigate = (event: React.MouseEvent<HTMLHeadingElement>) => {
    navigate(`/${secondText}`);
  };

  return (
    <Wrapper>
      <GlobalStyle />
      <TopBox>
        <TopText>{topText}</TopText>
      </TopBox>
      <BottomBox>
        <BottomText onClick={handleNavigate}>{bottomText}</BottomText>
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

const TopBox = styled.div`
  border-radius: 1em 1em 0em 0em;
  background-color: #788bff;
  box-sizing: border-box;
`;

const BottomBox = styled.div`
  border-radius: 0em 0em 1em 1em;
  height: 3em;
  background-color: #5465ff;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
`;

const TopText = styled.h1`
  color: white;
  font-size: 2em;
  margin-top: 1em;
  margin-bottom: 1em;
  text-align: center;
`;

const BottomText = styled.h2`
  color: white;
  font-size: 1em;
  text-align: center;
  cursor: pointer;
  margin-left: 2em;
`;

export default MainBox;
