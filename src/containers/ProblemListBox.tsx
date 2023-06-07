import React, { useState, useEffect } from "react";
import styled from "styled-components";
import QuizService from "../api/QuizService";
import convertTag from "../utils/converTag";

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
      <Text1>퀴즈 : {quizTitle}</Text1>
      <Text1>선택한 답 : {convertTag(selectTag as string)}</Text1>
      <Text1>정답 : {convertTag(answerTag as string)}</Text1>
      <Text2>풀이 시간 : {playTime}초</Text2>
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
  margin-right: 1em;
`;

const Text1 = styled.h2`
  width: 15em;
  font-size: 1em;
  color: #000000;
  margin-left: 5px;
`;

const Text2 = styled.h2`
  width: 10em;
  font-size: 1em;
  color: #000000;
  margin-left: 5px;
`;

const CorrectText = styled(Text2)`
  width: 3em;
  background-color: #5465ff;
  color: white;
  text-align: center;
  border-radius: 0.25em;
`;

const IncorrectText = styled(Text2)`
  width: 3em;
  background-color: #f03547;
  color: white;
  text-align: center;
  border-radius: 0.25em;
`;

export default ProblemListBox;
