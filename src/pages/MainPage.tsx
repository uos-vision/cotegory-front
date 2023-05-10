import React from "react";
import styled from "styled-components";
import GlobalStyle from "../theme/GlobalStyle";
import { useNavigate } from "react-router-dom";
import Header from "../containers/Header";
import Slider from "react-slick";
import Cookies from "js-cookie";

function MainPage() {
  const navigate = useNavigate();
  const handleProblem = () => {
    navigate("/problem");
  };
  // const jwtToken = Cookies.get("jwtToken");
  // const isLoggedIn = !!jwtToken;

  return (
    <Wrapper>
      <GlobalStyle />
      <Background>
        <Header />
        <BigImage
          onClick={handleProblem}
          src="Main.png"
          alt="큰이미지"
        ></BigImage>
      </Background>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff; /* Change background color */
`;

const Background = styled.div`
  width: 80%;
  justify-content: center;
  flex-direction: column;
  display: flex;
  align-items: center;
`;
const ImageSlide = styled.img`
  width: 100%;
  color: #acacac;
`;

const BigImage = styled.img`
  width: 100%;
  margin-top: 4em;
  border-radius: 1em;
  cursor: pointer;
`;

export default MainPage;
