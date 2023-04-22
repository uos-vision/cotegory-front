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
      <Background>
        <Header />
        <MainBox topText={"문제 추천"} bottomText={""} />
        <RecommendList>
          <RecommendBox />
          <RecommendBox />
          <RecommendBox />
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
  gap: 72px;
`;
export default RecommendPage;
