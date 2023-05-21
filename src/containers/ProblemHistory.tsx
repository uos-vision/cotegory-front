import Reqct, { useState } from "react";
import styled from "styled-components";
import GlobalStyle from "../theme/GlobalStyle";
import TitleWithLine from "./TitleWithLine";

interface Props {}

function ProblemHistory({}: Props) {
  return (
    <Wrapper>
      <TitleWithLine title="퀴즈 결과"></TitleWithLine>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  width: 100%;
`;

export default ProblemHistory;
