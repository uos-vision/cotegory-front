import React from "react";
import styled from "styled-components";
import GlobalStyle from "../theme/GlobalStyle";
import Header from "../containers/Header";
import MainBox from "../containers/MainBox";
import RecommendBox from "../containers/RecommendBox";

function RecommendPage() {
  const [problem, setProblem] = React.useState<string>("");

  return (
    <Wrapper>
      <GlobalStyle />
      <Background>
        <Header />
        <MainBox topText={"문제 추천"}></MainBox>
        <RecommendList>
          <RecommendBox
            recommendTitle="오늘의 추천"
            problemNumber="1000"
            problemTitle="오늘의 사과는 몇개 일까?"
          />
          <RecommendBox
            recommendTitle="백준 추천"
            problemNumber="2000"
            problemTitle="chat GPT를 찾아라!"
          />
          <RecommendBox
            recommendTitle="기업 문제 추천"
            problemNumber="3000"
            problemTitle="실시간 유출 카카오 문제"
          />
        </RecommendList>
      </Background>
    </Wrapper>
  );
}

const Wrapper = styled.div`
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
  align-items: center;
`;
const RecommendList = styled.section`
  width: 100%;
  height: 100%;
  margin-block: 3em;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: stretch;
  justify-content: space-between;
  gap: 5em;
`;
export default RecommendPage;
