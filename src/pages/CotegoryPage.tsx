import React from "react";
import styled from "styled-components";
import GlobalStyle from "../theme/GlobalStyle";
import Header from "../containers/Header";
import MainBox from "../containers/MainBox";

function CotegoryPage() {
  const [problem, setProblem] = React.useState<string>("");

  return (
    <CotegoryWrapper>
      <Header />
      <MainBox />
    </CotegoryWrapper>
  );
}

const CotegoryWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export default CotegoryPage;
