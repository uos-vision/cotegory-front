import React, { useState } from "react";
import styled from "styled-components";
function Header() {
  return (
    <Wrapper>
      <Head>
        <Logo src="src\assets\cotegory_logo.png" alt="코테고리 로고" />

        <HeaderBox>
          <HeadText>코테고리 풀기</HeadText>
        </HeaderBox>
        <HeaderBox>
          <HeadText>문제 추천</HeadText>
        </HeaderBox>
        <HeaderBox>
          <HeadText>내 정보</HeadText>
        </HeaderBox>
        <HeaderBox>
          <HeadText>코테고리 결과</HeadText>
        </HeaderBox>
      </Head>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  width: 1320px;
  /* display: flex; */
  justify-content: center;
  align-items: center;
  background-color: #ffffff; /* Change background color */
  font-family: "Roboto", sans-serif; // 'Roboto' 폰트 적용
`;
const Head = styled.section`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  width: 100%;
`;
const HeaderBox = styled.div`
  width: 180px;
  height: 50px;
  text-align: center;
  justify-content: center;
  font-family: "Roboto";
  display: flex; /* 가로로 배치되도록 수정 */
`;
const Logo = styled.img``;
const HeadText = styled.h1`
  text-align: center;
  font-size: 20px;
`;
export default Header;
