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
      <DateBox>
        <Date>{date}</Date>
      </DateBox>
      <HeadlineBox>
        <TitleText>{quizTitle}</TitleText>
      </HeadlineBox>
      <Text1>선택한 답 : {convertTag(selectTag as string)}</Text1>
      <Text1>정답 : {convertTag(answerTag as string)}</Text1>
      <Text2>풀이 시간 : {playTime}초</Text2>
      {selectTag === answerTag ? (
        <CorrectBox>
          <CorrectText>정답</CorrectText>
        </CorrectBox>
      ) : (
        <InCorrectBox>
          <IncorrectText>오답</IncorrectText>
        </InCorrectBox>
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
  justify-content: space-between;
`;

const Date = styled.h2`
  font-size: 1em;
  color: #ffffff;
  margin-left: 1em;
  margin-right: 1em;
`;

const DateBox = styled.div`
  width: 9em;
  background-color: #788bff;
  margin-left: 1em;
  margin-right: 1em;
  border-radius: 0.5em;
  text-align: center;
`;

const Text1 = styled.h2`
  width: 12em;
  font-size: 1em;
  color: #121212;
  margin-left: 5px;
  font-weight: 600;
`;

const TitleText = styled.h2`
  width: 18em;
  font-size: 1em;
  color: #000000;
  margin-left: 5px;
`;

const HeadlineBox = styled.div`
  width: 18em;
  background-color: #ffffff;
  margin-right: 1em;
  text-align: center;
  border-radius: 0.5em;
  box-shadow: #acacac;
`;

const Text2 = styled.h2`
  width: 8em;
  font-size: 1em;
  color: #000000;
  margin-left: 5px;
  font-weight: 500;
`;

const CorrectText = styled(Text2)`
  color: white;
  text-align: center;
`;

const IncorrectText = styled(Text2)`
  color: white;
`;

const CorrectBox = styled.div`
  width: 4em;
  background-color: #5465ff;
  border-radius: 0.5em;
  text-align: center;
  display: flex;
  margin-right: 1em;
`;

const InCorrectBox = styled.div`
  width: 4em;
  background-color: #f03547;
  border-radius: 0.5em;
  text-align: center;
  display: flex;
  margin-right: 1em;
`;
export default ProblemListBox;
