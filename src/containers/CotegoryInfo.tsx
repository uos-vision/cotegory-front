import Reqct, { useState } from "react";
import styled from "styled-components";
import GlobalStyle from "../theme/GlobalStyle";
import TitleWithLine from "./TitleWithLine";

interface Props {}

function CotegoryInfo({}: Props) {
  return (
    <Wrapper>
      <TitleWithLine title="요약" />
      <ContentBox>아녕</ContentBox>
      <TitleWithLine title="세부 결과" />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ContentBox = styled.div`
  width: 100%;
  background-color: #e9e9e9;
  margin-top: 3em;
  border-radius: 1em;
  padding-top: 1em;
  padding-bottom: 1em;
  align-items: center;
  text-align: center;
`;

export default CotegoryInfo;
