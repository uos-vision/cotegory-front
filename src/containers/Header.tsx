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
  const [selectedLinkIndex, setSelectedLinkIndex] = useState(-1);
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
  const handleCotegory = () => {
    navigate("/cotegory");
  };
  const handleRecommend = () => {
    navigate("/recommend");
  };
  const handleProfile = () => {
    navigate("/profile");
  };
  const handleResult = () => {
    navigate("/result");
  };
  return (
    <Wrapper>
      <GlobalStyle />
      <Head>
        <LogoImg onClick={handleLogo} src="horizon.png" alt="cotegory logo" />
        <HeaderBox onClick={handleCotegory}>
          <HeadText>코테고리 풀기</HeadText>
        </HeaderBox>
        <HeaderBox onClick={handleRecommend}>
          <HeadText>문제 추천</HeadText>
        </HeaderBox>
        <HeaderBox onClick={handleProfile}>
          <HeadText>내 정보</HeadText>
        </HeaderBox>
        <HeaderBox onClick={handleResult}>
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
  width: 100%;
  /* display: flex; */
  justify-content: center;
  align-items: center;
  background-color: #ffffff; /* Change background color */
  font-family: "Roboto", sans-serif; // 'Roboto' 폰트 적용
`;
const Head = styled.section`
  display: flex;
  justify-content: space-between; /* 왼쪽과 오른쪽에 공간을 나누어 배치 */

  text-align: center;
  margin-top: 2em;
`;
const HeaderBox = styled.button`
  width: 10em;
  height: 4em;
  text-align: center;
  justify-content: center;
  cursor: pointer;
  background-color: transparent;
  :hover {
    /* background-color: #5465ff;
    color: #ffffff; */
    color: #5465ff;
  }
  border-radius: 0.75em;
  border-color: transparent;
  margin-right: 10px;
  display: flex; /* 가로로 배치되도록 수정 */
`;
const HeadText = styled.h1`
  font-size: 16px;
`;

const SignInButton = styled.button`
  width: 10em;
  height: 4em;
  margin-left: 20em;
  cursor: pointer;
  background-color: #5465ff;
  :hover {
    background-color: #788bff;
  }
  border-radius: 0.75em;
  border-color: transparent;
  color: white;
`;

const LogoImg = styled.img`
  width: 8em;
  margin-right: 2em;
  cursor: pointer;
`;

export default Header;
