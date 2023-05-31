import React, { useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

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
  const handleProfile = () => {
    navigate("/profile");
  };

  useEffect(() => {
    const handleScrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // 링크 클릭 시 스크롤 이벤트 처리
    document
      .getElementById("logo-link")
      ?.addEventListener("click", handleScrollToTop);
    document
      .getElementById("cotegory-link")
      ?.addEventListener("click", handleScrollToTop);
    document
      .getElementById("recommend-link")
      ?.addEventListener("click", handleScrollToTop);
    document
      .getElementById("result-link")
      ?.addEventListener("click", handleScrollToTop);
    document
      .getElementById("profile-link")
      ?.addEventListener("click", handleScrollToTop);

    // Clean up
    return () => {
      document
        .getElementById("logo-link")
        ?.removeEventListener("click", handleScrollToTop);
      document
        .getElementById("cotegory-link")
        ?.removeEventListener("click", handleScrollToTop);
      document
        .getElementById("recommend-link")
        ?.removeEventListener("click", handleScrollToTop);
      document
        .getElementById("result-link")
        ?.removeEventListener("click", handleScrollToTop);
      document
        .getElementById("profile-link")
        ?.removeEventListener("click", handleScrollToTop);
    };
  }, []);

  return (
    <BarContainer>
      <BarContent>
        <Logo id="logo-link" onClick={handleLogo}>
          Cotegory
        </Logo>
        <NavLinks>
          <NavLink id="cotegory-link" onClick={handleCotegory}>
            코테고리 풀기
          </NavLink>
          <NavLink id="recommend-link" onClick={handleRecommend}>
            문제 추천
          </NavLink>
          <NavLink id="result-link" onClick={handleResult}>
            코테고리 결과
          </NavLink>
          <NavLink id="profile-link" onClick={handleProfile}>
            내 정보
          </NavLink>
        </NavLinks>
      </BarContent>
      <Text>서울특별시 동대문구 서울시립대로 163 정보기술관</Text>
      <Text>2023-1 컴퓨터과학종합설계 Vision조</Text>
    </BarContainer>
  );
};

const BarContainer = styled.footer`
  width: 100%;
  min-height: 10em;
  background-color: #333;
  color: #fff;
  margin-top: 3em;
  padding-top: 1em;
  padding-bottom: 1em;
`;

const BarContent = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

const Logo = styled.h1`
  cursor: pointer;
  font-size: 1.5rem;
`;

const NavLinks = styled.nav``;

const NavLink = styled.a`
  color: #fff;
  margin-left: 16px;
  text-decoration: none;
  cursor: pointer;
`;

const Text = styled.body`
  color: #fff;
  font-size: 0.75em;
  margin-left: 10%;
  margin-top: 2em;
`;
export default Footer;
