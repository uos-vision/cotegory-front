import React from "react";
import styled from "styled-components";
import GlobalStyle from "../theme/GlobalStyle";
import MainBox from "../containers/MainBox";
import ProblemBox from "../containers/ProblemBox";
import ProblemContentBox from "../containers/ProblemContentBox";
import { useNavigate } from "react-router-dom";
import AnswerBox from "../containers/AnswerBox";

function ProblemPage() {
  const [problem, setProblem] = React.useState<string>("");

  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };
  return (
    <Wrapper>
      <GlobalStyle />
      <Head>
        <HeadWrapper>
          <HeadText>코테고리 검사</HeadText>
          <HeadTime>진행 시간 </HeadTime>
          <HeadText> 1분 10초</HeadText>
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
            어느 날 창영이는 친한 친구와 대화를 나누었는데: "
            ></ProblemContentBox>
            <ProblemExanple>
              <ProblemInput>
                <ProblemContentBox
                  topText="입력"
                  bottomText="123"
                ></ProblemContentBox>
              </ProblemInput>
              <ProblemCase>
                <ProblemContentBox
                  topText="입력예제"
                  bottomText="123"
                ></ProblemContentBox>
              </ProblemCase>
            </ProblemExanple>
            <ProblemExanple>
              <ProblemInput>
                <ProblemContentBox
                  topText="입력"
                  bottomText="123"
                ></ProblemContentBox>
              </ProblemInput>
              <ProblemCase>
                <ProblemContentBox
                  topText="출력예제"
                  bottomText="123"
                ></ProblemContentBox>
              </ProblemCase>
            </ProblemExanple>
          </ProblemContent>
          <AnswerContent>
            <AnswerBox topText="답안" bottomText="선택"></AnswerBox>
            <AnswerBottomBox>
              <AnswerButton>너비 우선 탐색</AnswerButton>
              <AnswerButton>깊이 우선 탐색</AnswerButton>
              <AnswerButton>브루트포스 알고리즘</AnswerButton>
              <AnswerButton>다이나믹 프로그래밍</AnswerButton>
            </AnswerBottomBox>
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
  justify-content: end;
  margin-left: 70%;
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

const AnswerButton = styled.div`
  width: 80%;
  justify-content: center;
  background-color: #d9d9d9;
  border-radius: 1em 1em 1em 1em;
  text-align: center;
  margin-bottom: 1em;
  padding-top: 1.5em;
  padding-bottom: 1.5em;
  font-size: 1em;
  font-weight: 700;
  color: #000000;
  :hover {
    background-color: #13c4a3;
    color: #ffffff;
  }
  cursor: pointer;
`;
export default ProblemPage;
