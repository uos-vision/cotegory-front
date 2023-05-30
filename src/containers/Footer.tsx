import React from "react";
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

  return (
    <BarContainer>
      <BarContent>
        <Logo onClick={handleLogo}>Cotegory</Logo>
        <NavLinks>
          <NavLink onClick={handleCotegory}>코테고리 풀기</NavLink>
          <NavLink onClick={handleRecommend}>문제 추천</NavLink>
          <NavLink onClick={handleResult}>코테고리 결과</NavLink>
          <NavLink onClick={handleProfile}>내 정보</NavLink>
        </NavLinks>
      </BarContent>
    </BarContainer>
  );
};

const BarContainer = styled.footer`
  width: 100%;
  min-height: 10em;
  background-color: #333;
  color: #fff;
  padding: 16px;
  margin-top: 3em;
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

export default Footer;
