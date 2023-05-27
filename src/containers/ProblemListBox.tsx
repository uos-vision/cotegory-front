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
  return;
}

const Wrapper = styled.div`
  width: 100%;
  height: 3em;
  background-color: #ececec;
  border-radius: 1em;
`;
