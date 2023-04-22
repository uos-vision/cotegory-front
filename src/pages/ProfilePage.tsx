import React from "react";
import styled from "styled-components";
import GlobalStyle from "../theme/GlobalStyle";
import Header from "../containers/Header";
import MainBox from "../containers/MainBox";
import RecommendBox from "../containers/RecommendBox";

function ProfilePage() {
  const [problem, setProblem] = React.useState<string>("");

  return (
    <Wrapper>
      <GlobalStyle />
      <Background>
        <Header />
        <MainBox topText={"내 정보"} bottomText={"개인정보 수정"} />
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

export default ProfilePage;
