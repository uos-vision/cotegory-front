import React from "react";
import styled from "styled-components";
import Header from "../containers/Header";
// import color from "../theme/"

function MainPage() {
  return (
    <Wrapper>
      <Header />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff; /* Change background color */
  font-family: "Roboto", sans-serif; // 'Roboto' 폰트 적용
`;

const CenterImage = styled.div``;

export default MainPage;
