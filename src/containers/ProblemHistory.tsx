import Reqct, { useState, useEffect } from "react";
import styled from "styled-components";
import GlobalStyle from "../theme/GlobalStyle";
import TitleWithLine from "./TitleWithLine";
import SubmissionService from "../api/SubmissionService";
import ProblemList from "./ProblemList";
interface Props {}

function ProblemHistory({}: Props) {
  return (
    <Wrapper>
      <TitleWithLine title="퀴즈 결과" />
      <ProblemList />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  width: 100%;
`;

export default ProblemHistory;
