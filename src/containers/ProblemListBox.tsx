import React, { useState } from "react";
import styled from "styled-components";

interface Props {
  date?: string;
  quizId?: number;
  selectTag?: string;
  answerTag?: string;
  playTime?: number;
}

function ProblemListBox({
  date,
  quizId,
  selectTag,
  answerTag,
  playTime,
}: Props) {
  return (
    <Wrapper>
      <Text>{date}</Text>
      <Text>{quizId}</Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 3em;
  background-color: #ececec;
  border-radius: 1em;
  margin-block: 1em;
  display: flex;
  flex-direction: row;
`;

const Text = styled.h2`
  font-size: 1em;
  color: "#000000";
`;

export default ProblemListBox;
