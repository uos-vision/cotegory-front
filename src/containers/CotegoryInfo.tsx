import Reqct, { useState } from "react";
import styled from "styled-components";
import GlobalStyle from "../theme/GlobalStyle";
import TitleWithLine from "./TitleWithLine";
import CotegoryProfile from "./CotegoryProfile";
import DetailResult from "./DetailResult";

interface Props {}

function CotegoryInfo({}: Props) {
  return (
    <Wrapper>
      <TitleWithLine title="요약" />
      <CotegoryProfile></CotegoryProfile>
      <TitleWithLine title="세부 결과" />
      <DetailResult></DetailResult>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default CotegoryInfo;
