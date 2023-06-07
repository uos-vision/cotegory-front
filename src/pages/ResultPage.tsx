import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GlobalStyle from "../theme/GlobalStyle";
import Header from "../containers/Header";
import MainBox from "../containers/MainBox";
import ProblemHistory from "../containers/ProblemHistory";
import CotegoryInfo from "../containers/CotegoryInfo";
import { MemberService } from "../api";
import Footer from "../containers/Footer";

function ResultPage() {
  const [option, setOption] = useState<number>(0);

  const handleFirstTextClick = () => {
    setOption(0);
  };

  const handleSecondTextClick = () => {
    setOption(1);
  };

  return (
    <Wrapper>
      <GlobalStyle />
      <Background>
        <Header />
        <MainBox
          topText={"코테고리 결과"}
          firstText="코테고리 정보"
          firstLink="result"
          secondText="퀴즈 결과"
          secondLink="result"
          onClick={handleFirstTextClick}
          onClick2={handleSecondTextClick}
        />
        {option === 0 && <CotegoryInfo />}
        {option === 1 && <ProblemHistory />}
      </Background>
      <Footer />
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
