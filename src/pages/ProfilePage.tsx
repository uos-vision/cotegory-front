import React from "react";
import styled from "styled-components";
import GlobalStyle from "../theme/GlobalStyle";
import Header from "../containers/Header";
import MainBox from "../containers/MainBox";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import RecommendBox from "../containers/RecommendBox";
import Cookies from "js-cookie";

function ProfilePage() {
  // const history = useHistory();
  const [problem, setProblem] = React.useState<string>("");
  const navigate = useNavigate();
  const handleLogout = () => {
    const confirmLogout = window.confirm("정말로 로그아웃하시겠습니까?");
    if (confirmLogout) {
      Cookies.remove("accessToken");
      navigate("/");
    }
  };

  return (
    <Wrapper>
      <GlobalStyle />
      <Background>
        <Header />
        <MainBox topText={"내 정보"} bottomText="개인정보 수정"></MainBox>
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
        <WithdrawButton onClick={handleLogout}>로그아웃</WithdrawButton>
        {/* <WithdrawButton>탈퇴하기</WithdrawButton> */}
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
  width: 15%;
  height: 3em;
  margin-top: 2em;
  margin-bottom: 2em;
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
  font-size: 1em;
  color: #f03547;
`;

export default ProfilePage;
