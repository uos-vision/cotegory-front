import React from "react";
import styled from "styled-components";

function MainPage() {
  return (
    <Wrapper>
      <Header></Header>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  width: 80%;
  display: flex;
  /* justify-content: center;
  align-items: center; */
  background-color: #ffffff; /* Change background color */
  font-family: "Roboto", sans-serif; // 'Roboto' 폰트 적용
`;

const Header = styled.head`
  width: 100%;
  height: 150em;
`;
export default MainPage;
