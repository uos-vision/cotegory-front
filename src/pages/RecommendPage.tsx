import React, { useEffect, useState } from "react";
import styled from "styled-components";
import GlobalStyle from "../theme/GlobalStyle";
import Header from "../containers/Header";
import MainBox from "../containers/MainBox";
import RecommendBox from "../containers/RecommendBox";
import ProblemService from "../api/ProblemService";

function RecommendPage() {
  const [todayProblem, setTodayProblem] = useState<ProblemResponse>(
    {} as ProblemResponse
  );
  async function getTodayProblem() {
    try {
      const todayResponse = await ProblemService.TodayProblem();
      const today: ProblemResponse = {
        title: todayResponse.title,
        problemNum: todayResponse.problemNum,
        url: todayResponse.url,
      };
      setTodayProblem(today);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getTodayProblem();
  }, []);

  const todayTitle = todayProblem.title;
  const todayProblemNum = todayProblem.problemNum;
  const todayUrl = todayProblem.url;

  return (
    <Wrapper>
      <GlobalStyle />
      <Background>
        <Header />
        <MainBox
          topText={"문제 추천"}
          firstText={"나의 추천"}
          firstLink={"recommend"}
        ></MainBox>
        <RecommendList>
          <RecommendBox
            recommendTitle="오늘의 추천"
            problemNumber={`${todayProblemNum}`}
            problemTitle={`${todayTitle}`}
            problemLink={`${todayUrl}`}
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
