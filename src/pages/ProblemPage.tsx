import React, { useState, useEffect } from "react";
// import Parser from "react-html-parser";
import styled from "styled-components";
import ProblemBox from "../containers/ProblemBox";
import ProblemContentBox from "../containers/ProblemContentBox";
import { useNavigate } from "react-router-dom";
import AnswerBox from "../containers/AnswerBox";
import QuizService from "../api/QuizService";
import BetterReactMathjax, {
  MathJax,
  MathJaxContext,
} from "better-react-mathjax";

function convertTag(tag: string) {
  switch (tag) {
    case "DP":
      return "다이나믹 프로그래밍";
    case "BRUTE_FORCE":
      return "브루트포스";
    case "BINARY_SEARCH":
      return "이진 탐색";
    case "GREEDY":
      return "그리디";
    case "BIT_MASKING":
      return "비트마스킹";
    case "FLOYD_WARSHALL":
      return "플로이드 워셜";
    case "DIJKSTRA":
      return "다익스트라 알고리즘";
    case "UNION_FIND":
      return "유니온 파인드";

    default:
      return tag;
  }
}

function ProblemPage() {
  const [isSubmissioned, setIsSubmissioned] = useState<Boolean>(false);
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };
  const [quizInfo, setQuizInfo] = useState<QuizResponse>({} as QuizResponse);
  const [submissionInfo, setSubmissionInfo] = useState<SubmissionResponse>(
    {} as SubmissionResponse
  );
  //문제 불러오기
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await QuizService.GetQuiz();
        if (!response.tagGroupResponse) {
          throw new Error("tagGroupResponse is undefined");
        }
        const quiz: QuizResponse = {
          quizId: response.quizId,
          answerTag: response.answerTag,
          tagGroupResponse: {
            tagGroupId: response.tagGroupResponse.tagGroupId,
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
        navigate("/signin");
      }
    };

    fetchData();
  }, [navigate]);

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
  const tag1 = quizInfo.tagGroupResponse?.tags[0];
  const tag2 = quizInfo.tagGroupResponse?.tags[1];
  const tag3 = quizInfo.tagGroupResponse?.tags[2];
  const tag4 = quizInfo.tagGroupResponse?.tags[3];

  //문제 제출하기
  const handleSubmissionButton = async () => {
    try {
      const res = await QuizService.SubmissionQuiz({
        quizId: quizId,
        selectTag: selectedAnswer,
        playTime: minutes / 60 + seconds,
      });
      const submission: SubmissionResponse = {
        quizId: res.quizId,
        submissionId: res.submissionId,
        selectTag: res.selectTag,
        answerTag: res.answerTag,
        isCorrect: res.isCorrect,
      };
      setSubmissionInfo(submission);
      setIsSubmissioned(true);
    } catch (error) {
      console.error(error);
    }
  };
  //문제 넘어가기
  const handlePass = () => {
    setIsSubmissioned(false);
    window.location.reload(); // 페이지 새로고침
  };
  const handleProblemLink = () => {
    window.open(url, "_blank");
  };

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
    setStartTime(Date.now());
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (startTime !== null && !isSubmissioned) {
      interval = setInterval(() => {
        const now = Date.now();
        setElapsedTime(now - startTime);
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [startTime, isSubmissioned]);

  const seconds = Math.floor(elapsedTime / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

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
          topText={
            isSubmissioned
              ? title
              : "아래 문제에 사용할 적절한 알고리즘은 무엇인가요?"
          }
          bottomText={`메모리 제한 : ${memoryLimit}MB 시간 제한 : ${timeLimit}초`}
        ></ProblemBox>
        <ProblemWrapper>
          <ProblemContent>
            <MathJaxContext>
              <ProblemContentBox
                topText="문제 설명"
                bottomText={<MathJax>{problemBody}</MathJax>}
              ></ProblemContentBox>
            </MathJaxContext>

            <ProblemExanple>
              <ProblemInputBox>
                <ProblemContentBox
                  topText="입력"
                  bottomText={
                    <div dangerouslySetInnerHTML={{ __html: problemInput }} />
                  }
                ></ProblemContentBox>
              </ProblemInputBox>
              <ProblemCase>
                <ProblemContentBox
                  topText="입력예제"
                  bottomText={
                    <div dangerouslySetInnerHTML={{ __html: sampleInput }} />
                  }
                ></ProblemContentBox>
              </ProblemCase>
            </ProblemExanple>
            <ProblemExanple>
              <ProblemInputBox>
                <ProblemContentBox
                  topText="출력"
                  bottomText={
                    <div dangerouslySetInnerHTML={{ __html: problemOutput }} />
                  }
                ></ProblemContentBox>
              </ProblemInputBox>
              <ProblemCase>
                <ProblemContentBox
                  topText="출력예제"
                  bottomText={
                    <div dangerouslySetInnerHTML={{ __html: sampleOutput }} />
                  }
                ></ProblemContentBox>
              </ProblemCase>
            </ProblemExanple>
            <BottomMargin />
          </ProblemContent>
          <AnswerContent>
            <AnswerBox
              topText={
                isSubmissioned === false
                  ? "답안"
                  : submissionInfo.isCorrect === true
                  ? "정답입니다"
                  : "오답입니다"
              }
              bottomText="선택"
              topColor={isSubmissioned ? "#ffffff" : "#000000"}
              topBoxColor={
                isSubmissioned === false
                  ? "#36F1CD"
                  : submissionInfo.isCorrect === true
                  ? "#5465FF"
                  : "#F03547"
              }
            ></AnswerBox>{" "}
            <AnswerBottomBox>
              <AnswerBottomBox>
                <AnswerButton
                  onClick={() => handleAnswerClick(tag1)}
                  selected={selectedAnswer === tag1}
                  disabled={isSubmissioned ? true : undefined}
                >
                  {convertTag(tag1)}
                </AnswerButton>
                <AnswerButton
                  onClick={() => handleAnswerClick(tag2)}
                  selected={selectedAnswer === tag2}
                  disabled={isSubmissioned ? true : undefined}
                >
                  {convertTag(tag2)}
                </AnswerButton>
                <AnswerButton
                  onClick={() => handleAnswerClick(tag3)}
                  selected={selectedAnswer === tag3}
                  disabled={isSubmissioned ? true : undefined}
                >
                  {convertTag(tag3)}
                </AnswerButton>
                <AnswerButton
                  onClick={() => handleAnswerClick(tag4)}
                  selected={selectedAnswer === tag4}
                  disabled={isSubmissioned ? true : undefined}
                >
                  {convertTag(tag4)}
                </AnswerButton>
              </AnswerBottomBox>
            </AnswerBottomBox>
            <SubmitButton
              onClick={
                isSubmissioned ? handleProblemLink : handleSubmissionButton
              }
            >
              {isSubmissioned ? "백준에서 풀어보기" : "제출하기"}
            </SubmitButton>
            <PassButton onClick={handlePass}>
              {isSubmissioned ? "다음 문제로" : "넘어가기"}
            </PassButton>
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
const AnswerButton = styled.div<{ selected?: boolean; disabled?: boolean }>`
  width: 80%;
  justify-content: center;
  background-color: ${({ selected, disabled }) =>
    selected ? "#13c4a3" : disabled ? "#d9d9d9" : "#ffffff"};
  border-radius: 1em 1em 1em 1em;
  text-align: center;
  margin-bottom: 1em;
  padding-top: 1.5em;
  padding-bottom: 1.5em;
  font-size: 1em;
  font-weight: 700;
  color: ${({ selected, disabled }) =>
    selected ? "#ffffff" : disabled ? "#808080" : "#000000"};
  :hover {
    background-color: ${({ disabled }) => (disabled ? "#d9d9d9" : "#36f1cd")};
    color: ${({ disabled }) => (disabled ? "#808080" : "#000000")};
  }
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
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

const BottomMargin = styled.div`
  margin-bottom: 3em;
`;
export default ProblemPage;
