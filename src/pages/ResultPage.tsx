import React from "react";
import styled from "styled-components";
import GlobalStyle from "../theme/GlobalStyle";
import Header from "../containers/Header";
import MainBox from "../containers/MainBox";
import RecommendBox from "../containers/RecommendBox";

function ResultPage() {
  const [problem, setProblem] = React.useState<string>("");

  return (
    <Wrapper>
      <GlobalStyle />

      <Background>
        <Header />
        <MainBox topText={"코테고리 결과"}></MainBox>{" "}
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
export default ResultPage;
