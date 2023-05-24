import React, { useState, useEffect } from "react";
// import Parser from "react-html-parser";
import styled from "styled-components";
import GlobalStyle from "../theme/GlobalStyle";
import ProblemBox from "../containers/ProblemBox";
import ProblemContentBox from "../containers/ProblemContentBox";
import { useNavigate } from "react-router-dom";
import AnswerBox from "../containers/AnswerBox";
import QuizService from "../api/QuizService";

function ProblemPage() {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };
  const [quizInfo, setQuizInfo] = useState<QuizResponse>({} as QuizResponse);

  //문제 불러오기
  async function getQuiz() {
    try {
      const response = await QuizService.GetQuiz();
      const quiz: QuizResponse = {
        quizId: response.quizId,
        answerTag: response.answerTag,
        tagGroupResponse: {
          tagGroupId: response.tagGroupResponse.tagGroupId, // Assign directly from response
          tagGroupName: response.tagGroupResponse.tagGroupName,
          tags: response.tagGroupResponse.tags,
        },
        problemNumber: response.problemNumber,
        origin: response.origin,
        title: response.title,
        url: response.url,
        mmr: response.mmr,
        problemBody: response.problemBody,
        problemInput: response.problemInput,
        problemOutput: response.problemOutput,
        sampleInput: response.sampleInput,
        sampleOutput: response.sampleOutput,
        timeLimit: response.timeLimit,
        memoryLimit: response.memoryLimit,
      };
      setQuizInfo(quiz);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getQuiz();
  }, []);

  const quizId = quizInfo.quizId;
  const answerTag = quizInfo.answerTag;
  const problemNumber = quizInfo.problemNumber;
  const origin = quizInfo.origin;
  const title = quizInfo.title;
  const url = quizInfo.url;
  const problemBody = quizInfo.problemBody;
  const problemInput = quizInfo.problemInput;
  const problemOutput = quizInfo.problemOutput;
  const sampleInput = quizInfo.sampleInput;
  const sampleOutput = quizInfo.sampleOutput;
  const timeLimit = quizInfo.timeLimit;
  const memoryLimit = quizInfo.memoryLimit;

  //타이머 변수들
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer(answer);
  };

  useEffect(() => {
    setStartTime(Date.now());
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (startTime !== null) {
      interval = setInterval(() => {
        const now = Date.now();
        setElapsedTime(now - startTime);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [startTime]);

  const seconds = Math.floor(elapsedTime / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const parseHTML = (htmlString: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");
    return { __html: doc.documentElement.textContent };
  };

  return (
    <Wrapper>
      <Head>
        <HeadWrapper>
          <HeadText>코테고리 검사</HeadText>
          <HeadTime>진행 시간</HeadTime>
          <HeadText>
            {minutes % 60}분 {seconds % 60}초
          </HeadText>
        </HeadWrapper>
        <QuitText onClick={handleHome}>나가기</QuitText>
      </Head>
      <Background>
        {" "}
        <ProblemBox // 상단 문제바
          topText="아래 문제에 사용할 적절한 알고리즘은 무엇인가요?"
          bottomText={`메모리 제한 : ${memoryLimit}MB 시간 제한 : ${timeLimit}초`}
        ></ProblemBox>
        <ProblemWrapper>
          <ProblemContent>
            <ProblemContentBox
              topText="문제 설명"
              bottomText={`${problemBody}`}
            ></ProblemContentBox>

            <ProblemExanple>
              <ProblemInputBox>
                <ProblemContentBox
                  topText="입력"
                  bottomText={`${problemInput}`}
                ></ProblemContentBox>
              </ProblemInputBox>
              <ProblemCase>
                <ProblemContentBox
                  topText="입력예제"
                  bottomText={`${sampleInput}`}
                ></ProblemContentBox>
              </ProblemCase>
            </ProblemExanple>
            <ProblemExanple>
              <ProblemInputBox>
                <ProblemContentBox
                  topText="출력"
                  bottomText={`${problemOutput}`}
                ></ProblemContentBox>
              </ProblemInputBox>
              <ProblemCase>
                <ProblemContentBox
                  topText="출력예제"
                  bottomText={`${sampleOutput}`}
                ></ProblemContentBox>
              </ProblemCase>
            </ProblemExanple>
          </ProblemContent>
          <AnswerContent>
            <AnswerBox topText="답안" bottomText="선택"></AnswerBox>
            <AnswerBottomBox>
              <AnswerButton
                onClick={() => handleAnswerClick("너비 우선 탐색")}
                selected={selectedAnswer === "너비 우선 탐색"}
              >
                너비 우선 탐색
              </AnswerButton>
              <AnswerButton
                onClick={() => handleAnswerClick("깊이 우선 탐색")}
                selected={selectedAnswer === "깊이 우선 탐색"}
              >
                깊이 우선 탐색
              </AnswerButton>
              <AnswerButton
                onClick={() => handleAnswerClick("브루트포스 알고리즘")}
                selected={selectedAnswer === "브루트포스 알고리즘"}
              >
                브루트포스 알고리즘
              </AnswerButton>
              <AnswerButton
                onClick={() => handleAnswerClick("다이나믹 프로그래밍")}
                selected={selectedAnswer === "다이나믹 프로그래밍"}
              >
                다이나믹 프로그래밍
              </AnswerButton>
            </AnswerBottomBox>
            <SubmitButton>제출하기</SubmitButton>
            <PassButton>넘어가기</PassButton>
          </AnswerContent>
        </ProblemWrapper>
      </Background>
    </Wrapper>
  );
}
const ProblemWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
const Head = styled.div`
  width: 100%;
  height: 3em;
  justify-content: start;
  display: flex;
  background-color: #0c2b64;
`;

const HeadWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-left: 10%;
`;
const Wrapper = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Background = styled.div`
  width: 80%;
  justify-content: center;
  flex-direction: column;
  display: flex;
  align-items: left;
`;

const HeadText = styled.h2`
  font-size: 1em;
  font-weight: 800;
  color: #ffffff;
`;

const QuitText = styled.h2`
  width: 5em;
  font-size: 1em;
  font-weight: 200;
  margin-right: 10%;
  color: #cdcdcd;
  cursor: pointer;
`;

const HeadTime = styled.h2`
  font-size: 1em;
  font-weight: 400;
  color: #ffff00;
  margin-left: 2em;
  margin-right: 1em;
`;

const ProblemContent = styled.div`
  width: 60%;
  justify-content: start;
  align-items: start;
  display: flex;
  flex-direction: column;
`;

const ProblemInputBox = styled.div`
  width: 65%;
`;

const ProblemExanple = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const ProblemCase = styled.div`
  width: 30%;
  margin-left: 5%;
`;

const AnswerContent = styled.div`
  width: 35%;
  justify-content: start;
  align-items: start;
  display: flex;
  flex-direction: column;
  margin-left: 5%;
`;

const AnswerBottomBox = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  background-color: #ececec;
  border-radius: 0 0 1em 1em;
  margin-bottom: 2em;
  padding-top: 1em;
  align-items: center;
`;

const AnswerButton = styled.div<{ selected?: boolean }>`
  width: 80%;
  justify-content: center;
  background-color: ${({ selected }) => (selected ? "#13c4a3" : "#d9d9d9")};
  border-radius: 1em 1em 1em 1em;
  text-align: center;
  margin-bottom: 1em;
  padding-top: 1.5em;
  padding-bottom: 1.5em;
  font-size: 1em;
  font-weight: 700;
  color: ${({ selected }) => (selected ? "#ffffff" : "#000000")};
  :hover {
    background-color: #36f1cd;
    color: #000000;
  }
  cursor: pointer;
`;
const SubmitButton = styled.button`
  //제출버튼
  background-color: #5465ff;
  border: none;
  color: #fff;
  font-size: 1em;
  font-weight: bold;
  box-sizing: border-box; /* 추가 */
  border-radius: 0.75em;
  width: 100%;
  height: 3em;
  cursor: pointer;
  &:hover {
    background-color: #005fa3;
  }
`;

const PassButton = styled.button`
  //제출버튼
  background-color: #788bff;
  border: none;
  color: #fff;
  font-size: 1em;
  font-weight: bold;
  box-sizing: border-box; /* 추가 */
  border-radius: 0.75em;
  width: 100%;
  height: 3em;
  margin-top: 1em;
  margin-bottom: 2em;
  cursor: pointer;
  &:hover {
    background-color: #005fa3;
  }
`;
export default ProblemPage;
