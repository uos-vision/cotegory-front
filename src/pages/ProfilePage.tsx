import React from "react";
import styled from "styled-components";
import GlobalStyle from "../theme/GlobalStyle";
import Header from "../containers/Header";
import MainBox from "../containers/MainBox";
import RecommendBox from "../containers/RecommendBox";

function ProfilePage() {
  const [problem, setProblem] = React.useState<string>("");

  return (
    <Wrapper>
      <GlobalStyle />
      <Background>
        <Header />
        <MainBox topText={"내 정보"} bottomText={"개인정보 수정"} />
        <ProfileBox>
          <PictureBoxLeft>
            <Text>프로필 사진</Text>
          </PictureBoxLeft>
          <PictureUploadBox></PictureUploadBox>
          <PictureBoxRight>
            <MiniBox>
              <Text>닉네임</Text>
            </MiniBox>
            <MiniBox>
              <Text>백준 ID</Text>
            </MiniBox>
            <MiniBox>
              <Text>가입일</Text>
            </MiniBox>
          </PictureBoxRight>
        </ProfileBox>
        <WithdrawButton>탈퇴하기</WithdrawButton>
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

const Text = styled.h1`
  font-size: 1.25em;
  line-height: 4em;
  text-align: center;
`;

const WithdrawText = styled.h2`
  font-size: 1.5em;
  color: #f03547;
`;

const Background = styled.div`
  width: 80%;
  justify-content: center;
  flex-direction: column;
  display: flex;
  align-items: center;
`;

const ProfileBox = styled.div`
  width: 100%;
  height: 20em;
  margin-top: 3em;
  display: flex;
  border: #cdcdcd;
  border-style: solid;
  border-radius: 1em;
`;

const PictureBoxLeft = styled.div`
  width: 20%;
  height: 100%;
  border-radius: 1em 0 0 1em;
  align-items: center;
  border: #cdcdcd;
  background-color: #eeeeee;
`;

const PictureBoxRight = styled.div`
  width: 20%;
  height: 100%;
  border-radius: 0 0 0 0;
  border: #cdcdcd;
  background-color: #eeeeee;
  display: flex;
  flex-direction: column;
`;

const MiniBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ececec;
  border: 2px #aaaaaa;
  text-align: center;
  justify-content: center;
`;
const PictureUploadBox = styled.div`
  width: 30%;
  height: 100%;
  border: #cdcdcd;
  background-color: #ffffff;
  align-items: center;
  text-align: center;
  display: flex;
`;

const WithdrawButton = styled.button`
  width: 20%;
  height: 3em;
  margin-top: 3em;
  margin-bottom: 3em;
  border: #f03547;
  border-radius: 1em;
  background-color: #ffffff;
  border-style: solid;
  cursor: pointer;
  :hover {
    background-color: #f03547;
    color: #ffffff;
  }
  font-weight: 600;
  font-size: 1.5em;
  color: #f03547;
`;

export default ProfilePage;
