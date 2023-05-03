import React from "react";
import styled from "styled-components";
import GlobalStyle from "../theme/GlobalStyle";
import Header from "../containers/Header";
import MainBox from "../containers/MainBox";
import { useNavigate } from "react-router-dom";

function CotegoryPage() {
  const [problem, setProblem] = React.useState<string>("");
  const navigate = useNavigate();
  const handleProblem = () => {
    navigate("/problem");
  };

  return (
    <Wrapper>
      <Background>
        <Header />
        <MainBox topText={"코테고리 풀기"}></MainBox>{" "}
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
        <StartButton>
          <ButtonText onClick={handleProblem}>지금 시작하기</ButtonText>
        </StartButton>
      </Background>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Background = styled.div`
  width: 80%;
  justify-content: center;
  flex-direction: column;
  display: flex;
  align-items: center;
`;

const StartButton = styled.button`
  width: 20%;
  background-color: #5465ff;
  color: #ffffff;
  margin-top: 3em;
  margin-bottom: 3em;
  border-color: transparent;
  border-radius: 1em;
  :hover {
    background-color: #788bff;
  }
  cursor: pointer;
`;

const CommentBox = styled.div`
  width: 100%;
  background-color: #e9e9e9;
  margin-top: 3em;
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
export default CotegoryPage;
