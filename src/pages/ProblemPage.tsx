import React from "react";
import styled from "styled-components";
import GlobalStyle from "../theme/GlobalStyle";
import MainBox from "../containers/MainBox";
import ProblemBox from "../containers/ProblemBox";
import ProblemContentBox from "../containers/ProblemContentBox";

function ProblemPage() {
  const [problem, setProblem] = React.useState<string>("");

  return (
    <Wrapper>
      <GlobalStyle />
      <Head>
        <HeadWrapper>
          <HeadText>코테고리 검사</HeadText>
          <HeadTime>진행 시간 </HeadTime>
          <HeadText> 1분 10초</HeadText>
        </HeadWrapper>
      </Head>
      <Background>
        {" "}
        <ProblemBox
          topText="아래 문제에 사용할 적절한 알고리즘은 무엇인가요?"
          bottomText="메모리 제한 : 256MB 시간 제한 : 2초"
        ></ProblemBox>
        <ProblemContent>
          <ProblemContentBox
            topText="문제 설명"
            bottomText="소수를 유난히도 좋아하는 창영이는 게임 아이디 비밀번호를 4자리 '소수'로 정해놓았다."
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
      </Background>
    </Wrapper>
  );
}

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
export default ProblemPage;
