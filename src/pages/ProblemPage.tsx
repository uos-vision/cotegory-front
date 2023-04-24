import React from "react";
import styled from "styled-components";
import GlobalStyle from "../theme/GlobalStyle";

function ProblemPage() {
  const [problem, setProblem] = React.useState<string>("");

  return (
    <Wrapper>
      <GlobalStyle />
      <Head></Head>
      <Background></Background>
    </Wrapper>
  );
}

const Head = styled.div`
  width: 100%;
  height: 3em;
  background-color: #0c2b64;
`;
const Wrapper = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const HeadText = styled.h2`
  font-size: 1em;
`;
const Background = styled.div`
  width: 80%;
  justify-content: center;
  flex-direction: column;
  display: flex;
  align-items: center;
`;
export default ProblemPage;
