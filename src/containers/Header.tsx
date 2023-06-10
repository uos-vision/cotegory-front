import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GlobalStyle from "../theme/GlobalStyle";
import { useRecoilValue } from "recoil";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import MemberService from "../api/MemberService";
import { isAuth as RecoilIsAuth } from "../store";

function Header() {
  const me = useRecoilValue(RecoilIsAuth);
  const [memberInfo, setMemberInfo] = useState<MemberResponse>(
    {} as MemberResponse
  );

  const jwtToken = Cookies.get("accessToken");
  const isLoggedIn = !!jwtToken;

  useEffect(() => {
    async function getUserInfo() {
      try {
        const response = await MemberService.information();
        const userInfo = {
          id: response.id,
          baekjoonHandle: response.baekjoonHandle,
          imgUrl: response.imgUrl,
          nickName: response.nickName,
          roles: response.roles,
        };
        setMemberInfo(userInfo);
      } catch (error) {
        console.error(error);
        // Cookies.remove("accessToken");
      }
    }

    getUserInfo();
  }, []);

  const buttonText = isLoggedIn ? memberInfo.nickName : "로그인";
  const buttonHandle = isLoggedIn ? "/profile" : "/signin";

  const navigate = useNavigate();
  const handleSignin = () => {
    navigate(buttonHandle);
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

  const handleResult = () => {
    navigate("/result");
  };

  return (
    <Wrapper>
      <Head>
        <LogoImg onClick={handleLogo} src="horizon.png" alt="cotegory logo" />
        <HeaderBox onClick={handleCotegory}>
          <HeadText>코테고리 풀기</HeadText>
        </HeaderBox>
        <HeaderBox onClick={handleRecommend}>
          <HeadText>문제 추천</HeadText>
        </HeaderBox>
        <HeaderBox onClick={handleResult}>
          <HeadText>코테고리 결과</HeadText>
        </HeaderBox>
        <SignInButton type="button" onClick={handleSignin}>
          <HeadText>{buttonText}</HeadText>
        </SignInButton>
      </Head>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #ffffff; /* Change background color */
  border-radius: 1em;
`;
const Head = styled.section`
  display: flex;
  justify-content: space-between; /* 왼쪽과 오른쪽에 공간을 나누어 배치 */
  text-align: center;
  margin-top: 2em;
  border-radius: 1em;
  padding: 0.5em;
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
  border-radius: 1em;
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
  margin-left: 30em;
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
