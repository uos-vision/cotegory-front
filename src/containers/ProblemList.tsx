import React, { useState } from "react";
import styled from "styled-components";
import ProblemListBox from "./ProblemListBox";

interface Props {
  date?: string;
  quizId?: number;
  selectTag?: string;
  answerTag?: string;
  playTime?: number;
}

function ProblemList({}: Props) {
  return (
    <Wrapper>
      <ProblemListBox></ProblemListBox>
    </Wrapper>
  );
}

export default ProblemList;

const Wrapper = styled.div`
  width: 100%;
`;
