import React, { useState, useEffect } from "react";
import styled from "styled-components";
import QuizService from "../api/QuizService";

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
  const [quizTitle, setQuizTitle] = useState<string>("");

  useEffect(() => {
    if (quizId !== undefined) {
      getProblemInfo();
    }
  }, [quizId]);

  async function getProblemInfo() {
    try {
      const response = await QuizService.GetQuizInfo(quizId!);
      setQuizTitle(response.title);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Wrapper>
      <Date>{date}</Date>
      <Text>퀴즈 : {quizTitle}</Text>
      <Text>선택한 답 : {selectTag}</Text>
      <Text>정답 : {answerTag}</Text>
      <Text>풀이 시간 : {playTime}초</Text>
      {selectTag === answerTag ? (
        <CorrectText>정답</CorrectText>
      ) : (
        <IncorrectText>오답</IncorrectText>
      )}
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

const CorrectText = styled(Text)`
  background-color: blue;
  color: white;
`;

const IncorrectText = styled(Text)`
  background-color: red;
  color: white;
`;

export default ProblemListBox;
