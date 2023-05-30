import React, { useEffect, useState } from "react";
import styled from "styled-components";
import GlobalStyle from "../theme/GlobalStyle";
import Header from "../containers/Header";
import { useNavigate } from "react-router-dom";
import MainBox from "../containers/MainBox";
import RecommendBox from "../containers/RecommendBox";
import ProblemService from "../api/ProblemService";

function RecommendPage() {
  const navigate = useNavigate();
  const [todayProblem, setTodayProblem] = useState<ProblemResponse>(
    {} as ProblemResponse
  );
  const [aiProblem, setAiProblem] = useState<ProblemResponse>(
    {} as ProblemResponse
  );
  useEffect(() => {
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
        navigate("/signin"); // jwt 토큰이 없을 때 signin 페이지로 이동
      }
    }
    getTodayProblem();
    async function getAiProblem() {
      try {
        const aiResponse = await ProblemService.AiProblem();
        const ai: ProblemResponse = {
          title: aiResponse.title,
          problemNum: aiResponse.problemNum,
          url: aiResponse.url,
        };
        setAiProblem(ai);
      } catch (error) {
        console.error(error);
        navigate("/signin"); // jwt 토큰이 없을 때 signin 페이지로 이동
      }
    }
    getAiProblem();
  }, [navigate]); // 빈 배열을 의존성 배열로 전달하여 컴포넌트가 마운트될 때 한 번만 실행되도록 설정

  const handleTodayResetClick = async () => {
    try {
      const res = await ProblemService.PostToday();
    } catch (error) {
      console.error(error);
    }
    window.location.reload();
  };
  const handleAiResetClick = async () => {
    try {
      const res = await ProblemService.PostAi();
    } catch (error) {
      console.error(error);
    }
    window.location.reload();
  };

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
            onResetClick={handleTodayResetClick}
          />
          <RecommendBox
            recommendTitle="백준 추천"
            problemNumber={`${aiProblem.problemNum}`}
            problemTitle={`${aiProblem.title}`}
            problemLink={`${aiProblem.url}`}
            onResetClick={handleAiResetClick}
          />
          <RecommendBox
            recommendTitle="기업 문제 추천"
            problemNumber="3000"
            problemTitle="실시간 유출 카카오 문제"
            onResetClick={handleTodayResetClick}
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
