import React, { useState } from "react";
import styled from "styled-components";
import GlobalStyle from "../theme/GlobalStyle";
import { useNavigate } from "react-router-dom";

interface Props {
  topText?: string;
  firstText?: string;
  secondText?: string;
  firstLink?: string;
  secondLink?: string;
  onClick?: (event: React.MouseEvent<HTMLHeadingElement>) => void;
  onClick2?: (event: React.MouseEvent<HTMLHeadingElement>) => void;
}

function MainBox({
  topText,
  firstText,
  firstLink,
  secondText,
  secondLink,
  onClick,
  onClick2,
}: Props) {
  const navigate = useNavigate();
  const [selectedText, setSelectedText] = useState(""); // 초기값은 ""

  const handleNavigate = (event: React.MouseEvent<HTMLHeadingElement>) => {
    navigate(`/${firstLink}`);
    onClick?.(event);
    setSelectedText(firstText || ""); // 선택된 텍스트가 없을 경우 빈 문자열로 설정
  };

  const handleNavigate2 = (event: React.MouseEvent<HTMLHeadingElement>) => {
    navigate(`/${secondLink}`);
    onClick2?.(event);
    setSelectedText(secondText || ""); // 선택된 텍스트가 없을 경우 빈 문자열로 설정
  };

  return (
    <Wrapper>
      <GlobalStyle />
      <TopBox>
        <TopText>{topText}</TopText>
      </TopBox>
      <BottomBox>
        <BottomText
          onClick={handleNavigate}
          isSelected={selectedText === firstText}
        >
          {firstText}
        </BottomText>
        <BottomText
          onClick={handleNavigate2}
          isSelected={selectedText === secondText}
        >
          {secondText}
        </BottomText>
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

const BottomText = styled.h2<{ isSelected: boolean }>`
  color: ${({ isSelected }) => (isSelected ? "yellow" : "white")};
  font-size: 1em;
  text-align: center;
  cursor: pointer;
  margin-left: 2em;
`;

export default MainBox;
