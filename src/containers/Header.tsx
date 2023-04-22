import React, { useState } from "react";
import styled from "styled-components";
import GlobalStyle from "../theme/GlobalStyle";

import {
  BrowserRouter as Router,
  useNavigate,
  Routes,
  Route,
} from "react-router-dom";
function Header() {
  const handleClickLoginButton = async () => {
    try {
    } catch {}
  };

  const navigate = useNavigate();
  const handleSignin = () => {
    navigate("/signin");
  };
  const handleLogo = () => {
    navigate("/");
  };
  return (
    <Wrapper>
      <GlobalStyle />
      <Head>
        <LogoImg onClick={handleLogo} src="horizon.png" alt="cotegory logo" />
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
        <SignInButton type="button" onClick={handleSignin}>
          <HeadText>로그인</HeadText>
        </SignInButton>
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
  margin-top: 30px;
`;
const HeaderBox = styled.button`
  width: 150px;
  height: 50px;
  text-align: center;
  justify-content: center;
  font-family: "Roboto";
  cursor: pointer;
  background-color: transparent;
  /* Fix hover code */
  :hover {
    background-color: #ececec;
  }
  border-radius: 10px;
  border-color: transparent;
  /* margin-right: 10px; */
  display: flex; /* 가로로 배치되도록 수정 */
`;
const HeadText = styled.h1`
  text-align: center;
  font-size: 16px;
`;

const SignInButton = styled.button`
  width: 120px;
  height: 50px;
  margin-left: 50px;
  cursor: pointer;
  background-color: #5465ff;
  :hover {
    background-color: #788bff;
  }
  border-radius: 10px;
  border-color: transparent;
  color: white;
`;

const LogoImg = styled.img`
  width: 130px;
  margin-right: 20px;
  display: flex;
  cursor: pointer;
`;

export default Header;
