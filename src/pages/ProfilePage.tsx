import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GlobalStyle from "../theme/GlobalStyle";
import Header from "../containers/Header";
import MainBox from "../containers/MainBox";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import MemberService from "../api/MemberService";
import { useRecoilValue } from "recoil";
import { isAuth as RecoilIsAuth } from "../store";
import Footer from "../containers/Footer";

function ProfilePage() {
  const me = useRecoilValue(RecoilIsAuth);
  const [memberInfo, setMemberInfo] = useState<MemberResponse>(
    {} as MemberResponse
  );
  const [image, setImage] = React.useState<string | undefined>(undefined);
  const navigate = useNavigate();
  const handleLogout = () => {
    const confirmLogout = window.confirm("정말로 로그아웃하시겠습니까?");
    if (confirmLogout) {
      Cookies.remove("accessToken");
      navigate("/");
    }
  };

  //유저 정보 가져오기
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
    }
  }

  useEffect(() => {
    getUserInfo();
  }, []);

  const nickname = memberInfo.nickName;
  const baekjoonHandle = memberInfo.baekjoonHandle;

  //이미지 업로드
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageDelete = () => {
    setImage(undefined);
  };

  return (
    <Wrapper>
      <GlobalStyle />
      <Background>
        <Header />
        <MainBox
          topText={"내 정보"}
          firstText="개인정보 수정"
          firstLink="profile"
        ></MainBox>
        <ProfileBox>
          <PictureBoxLeft>
            <Text>프로필 사진</Text>
          </PictureBoxLeft>
          <PictureUploadBox>
            <PictureUploadBox>
              {image ? (
                <ProfileImage src={image} alt="프로필 사진" />
              ) : (
                <ProfileImagePlaceholder>no image</ProfileImagePlaceholder>
              )}
              <ImageButtonWrapper>
                <ImageButton>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                  업로드 하기
                </ImageButton>
                {image && (
                  <ImageButton onClick={handleImageDelete}>삭제</ImageButton>
                )}
              </ImageButtonWrapper>
            </PictureUploadBox>
          </PictureUploadBox>
          <PictureBoxRight>
            <MiniBox>
              <Text>닉네임</Text>
            </MiniBox>
            <MiniBox>
              <Text>백준 ID</Text>
            </MiniBox>
          </PictureBoxRight>
          <ProfileTextBox>
            <TopMiniBox>
              <Text>{nickname}</Text>
            </TopMiniBox>
            <BottomMiniBox>
              <Text>{baekjoonHandle}</Text>
            </BottomMiniBox>
          </ProfileTextBox>
        </ProfileBox>
        <SubmitButton>수정하기</SubmitButton>
        <WithdrawButton onClick={handleLogout}>로그아웃</WithdrawButton>
        {/* <WithdrawButton>탈퇴하기</WithdrawButton> */}
      </Background>
      <Footer />
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
  line-height: 6.5em;
  text-align: center;
  border: 1px #ececec;
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

const ProfileTextBox = styled.div`
  width: 30%;
  height: 100%;
  border-radius: 0 1em 1em 0;
  border: #cdcdcd;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
`;

const MiniBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ececec;
  border: 1px #cdcdcd;
  border-style: solid;
  border-collapse: collapse;
  text-align: center;
  justify-content: center;
`;

const TopMiniBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  border: 1px #cdcdcd;
  border-style: solid;
  border-collapse: collapse;
  border-radius: 0 1em 0 0;
  text-align: center;
  justify-content: center;
`;

const BottomMiniBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  border: 1px #cdcdcd;
  border-style: solid;
  border-collapse: collapse;
  border-radius: 0 0 1em 0;
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
  justify-content: space-around;
  flex-direction: column;
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

const SubmitButton = styled.button`
  width: 15%;
  height: 3em;
  margin-top: 2em;
  border: #5465ff;
  border-radius: 1em;
  background-color: #ffffff;
  border-style: solid;
  cursor: pointer;
  :hover {
    background-color: #788bff;
    color: #ffffff;
  }
  font-weight: 600;
  font-size: 1em;
  color: #5465ff;
`;

const ImageButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
const ImageButton = styled.button`
  width: 300px;
  height: 100px;
  border: transparent;
  background-color: #ececec;
  color: #000000;
  padding-left: 1em;
  padding-right: 1em;
  position: relative;
  overflow: hidden;

  cursor: pointer;
  :hover {
    background-color: #cdcdcd;
  }
  border-radius: 1em;
`;

const ProfileImagePlaceholder = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1em;
  margin-top: 1em;
  background-color: lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1em;
  margin-top: 1em;
`;
export default ProfilePage;
