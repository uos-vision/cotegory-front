import React from "react";
import styled from "styled-components";
import GlobalStyle from "../theme/GlobalStyle";
import Header from "../containers/Header";
import MainBox from "../containers/MainBox";
import ProblemHistory from "../containers/ProblemHistory";
import CotegoryInfo from "../containers/CotegoryInfo";

function ResultPage() {
  const [option, setOption] = React.useState<number>(0);
  return (
    <Wrapper>
      <GlobalStyle />
      <Background>
        <Header />
        <MainBox
          topText={"코테고리 결과"}
          firstText="문제 히스토리"
          firstLink="result"
          secondText="코테고리 정보"
          secondLink="result"
        ></MainBox>{" "}
        {option === 0 && <ProblemHistory />}
        {option === 1 && <CotegoryInfo />}
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
