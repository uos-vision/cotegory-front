import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GlobalStyle from "../theme/GlobalStyle";
import { css } from "@emotion/css";
import ProblemBox from "../containers/ProblemBox";
import ProblemContentBox from "../containers/ProblemContentBox";
import { useNavigate } from "react-router-dom";
import AnswerBox from "../containers/AnswerBox";

function ProblemPage() {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };

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

  return (
    <Wrapper>
      <GlobalStyle />
      <Head>
        <HeadWrapper>
          <HeadWrapper>
            <HeadText>코테고리 검사</HeadText>
            <HeadTime>진행 시간</HeadTime>
            <HeadText>
              {minutes % 60}분 {seconds % 60}초
            </HeadText>
          </HeadWrapper>
          <QuitText onClick={handleHome}>나가기</QuitText>
        </HeadWrapper>
      </Head>
      <Background>
        {" "}
        <ProblemBox // 상단 문제바
          topText="아래 문제에 사용할 적절한 알고리즘은 무엇인가요?"
          bottomText="메모리 제한 : 256MB 시간 제한 : 2초"
        ></ProblemBox>
        <ProblemWrapper>
          <ProblemContent>
            <ProblemContentBox // 좌측 문제 설명
              topText="문제 설명"
              bottomText="소수를 유난히도 좋아하는 창영이는 게임 아이디 비밀번호를 4자리 '소수'로 정해놓았다.
            어느 날 창영이는 친한 친구와 대화를 나누었는데: 입력은 항상 네 자리 소수만 주어진다고 가정하자. 주어진 두 소수 A에서 B로 바꾸는 과정도 항상 네 자리 소수를 유지해야 하고, '네 자리 수'라 하였기 때문에 0039와 같은 1000미만의 비밀번호는 허용되지 않는다 "
            ></ProblemContentBox>
            <ProblemExanple>
              <ProblemInput>
                <ProblemContentBox
                  topText="입력"
                  bottomText="첫 줄에 TEST CASE의 수 T가 주어진다. 다음 T줄에 걸쳐 각 줄에 1쌍씩 네 자리 소수가 주어진다"
                ></ProblemContentBox>
              </ProblemInput>
              <ProblemCase>
                <ProblemContentBox
                  topText="입력예제"
                  bottomText="1033 8179"
                ></ProblemContentBox>
              </ProblemCase>
            </ProblemExanple>
            <ProblemExanple>
              <ProblemInput>
                <ProblemContentBox
                  topText="출력"
                  bottomText="각 TEST CASE에 대해 두 소수 사이의 변환에 필요한 최소 회수를 출력한다. 불가능한 경우 Impossible을 출력한다."
                ></ProblemContentBox>
              </ProblemInput>
              <ProblemCase>
                <ProblemContentBox
                  topText="출력예제"
                  bottomText="6"
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
  justify-content: center;
  display: flex;
  background-color: #0c2b64;
`;

const HeadWrapper = styled.div`
  width: 80%;
  display: flex;
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
  font-size: 1em;
  font-weight: 200;
  color: #cdcdcd;
  align-items: end;
  justify-content: flex-end;
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

const ProblemInput = styled.div`
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
