import React from "react";
import styled from "styled-components";
import GlobalStyle from "../theme/GlobalStyle";
import { useNavigate } from "react-router-dom";
import Header from "../containers/Header";
import Slider from "react-slick";
import Cookies from "js-cookie";
import Footer from "../containers/Footer";

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
        <CommentBox>
          <Text>
            <h2>코딩테스트 공부의 유쾌한 반란.</h2>
            <br />
            <h1>"Cotegory"</h1>
            <br />
            <body>
              Cotegory는 기존의 답답했던 코딩테스트 교육과 다르게, <br />
              <br />
              학습의 새로운 방법을 선물하죠.
            </body>
            <br />
            <h2>간단. 쉬움. 빠름.</h2>
            <br />
            <h3>Cotegory 검사로 나의 코딩테스트 역량을 확인해보세요.</h3>
          </Text>
        </CommentBox>
      </Background>
      <Footer />
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
const CommentBox = styled.div`
  width: 100%;
  background-color: #e9e9e9;
  margin-top: 3em;
  margin-bottom: 3em;
  border-radius: 1em;
  padding-top: 1em;
  padding-bottom: 1em;
  align-items: center;
  text-align: center;
`;
const ButtonText = styled.h1`
  font-size: 1.5em;
`;
const Text = styled.body`
  font-size: 1em;
`;

export default MainPage;
