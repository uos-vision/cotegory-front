import React from "react";
import styled from "styled-components";
import GlobalStyle from "../theme/GlobalStyle";
import Header from "../containers/Header";
import MainBox from "../containers/MainBox";

function RecommendPage() {
  const [problem, setProblem] = React.useState<string>("");

  return (
    <Wrapper>
      <Background>
        <Header />
        <MainBox topText={"문제 추천"} bottomText={""} />
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

export default RecommendPage;
