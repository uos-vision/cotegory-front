import React from "react";
import styled from "styled-components";
import GlobalStyle from "../theme/GlobalStyle";
import { useNavigate } from "react-router-dom";

import Header from "../containers/Header";
import Slider from "react-slick";
// import Cookies from "js-cookie";

// import color from "../theme/"

function MainPage() {
  const sliderSettings = {
    dots: true, // 하단의 점(dot)을 보여줄지 여부
    infinite: true, // 무한 루프
    speed: 500, // 애니메이션 속도 (ms)
    slidesToShow: 1, // 한 번에 보여줄 슬라이드 개수
    slidesToScroll: 1, // 한 번에 스크롤할 슬라이드 개수
    autoplay: true, // 자동 재생
    autoplaySpeed: 2000, // 자동 재생 속도 (ms)
  };
  const navigate = useNavigate();
  const handleProblem = () => {
    navigate("/problem");
  };

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
