import React from "react";
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
      <Date>{date}</Date>
      <Text>문제 번호 : {quizId}</Text>
      <Text>선택한 답 : {selectTag}</Text>
      <Text>정답 : {answerTag}</Text>
      <Text>풀이 시간 : {playTime}초</Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 3em;
  background-color: #ececec;
  border-radius: 1em;
  padding-block: 1em;
  margin-block: 1em;
  display: flex;
  flex-direction: row;
`;

const Date = styled.h2`
  font-size: 1em;
  color: blue;
  margin-left: 1em;
`;

const Text = styled.h2`
  font-size: 1em;
  color: #000000;
  margin-left: 5px;
`;

export default ProblemListBox;
