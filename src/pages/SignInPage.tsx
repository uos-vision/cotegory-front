import React from "react";
import styled from "styled-components";
import Header from "../containers/Header";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";

function SignInPage() {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const navigate = useNavigate();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogo = () => {
    navigate("/");
  };

  const handleSignUpButton = () => {
    navigate("/signup");
  };

  // const handleHomeButtonClick = () => {
  //   navigate("/MainPage"); // Call navigate with the desired path
  // };

  return (
    <SignInWrapper>
      <SignInBox>
        <BoxLayout>
          <Headline>로그인</Headline>
          <Text>아이디</Text>
          <InputBox
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Text>비밀번호</Text>
          <InputBox
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <SubmitButton type="submit">로그인</SubmitButton>
          <SignUpButton type="submit" onClick={handleSignUpButton}>
            회원가입
          </SignUpButton>
          <LogoImg
            onClick={handleLogo}
            src="vertical.png"
            alt="cotegory logo"
          />
        </BoxLayout>
      </SignInBox>
    </SignInWrapper>
  );
}

const SignInWrapper = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #cecece; /* Change background color */
  font-family: "Roboto", sans-serif; // 'Roboto' 폰트 적용
`;

const SignInBox = styled.section`
  box-sizing: border-box;
  justify-content: center;
  display: flex;
  width: 40%;
  margin-block: 120px;
  background: #ffffff;
  border: 2px solid #d9d9d9;
  border-radius: 16px;
`;
const BoxLayout = styled.div`
  justify-content: center;
  width: 50%;
  margin: 72px;
`;
const Headline = styled.h1`
  text-align: center;
  font-size: 24px;
  margin-top: 15px;
`;
const Text = styled.p`
  font-size: 16px;
  margin-top: 30px;
  text-align: left;
`;
const InputBox = styled.input`
  font-size: 16px;
  width: 100%;
  height: 30px;
  padding: 8px;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
`;
const SubmitButton = styled.button`
  background-color: #5465ff;
  border: none;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 10px;
  margin-top: 30px;
  width: 100%;
  height: 50px;
  cursor: pointer;
  &:hover {
    background-color: #005fa3;
  }
`;
const SignUpButton = styled.button`
  background-color: #788bff;
  border: none;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 10px;
  margin-top: 30px;
  width: 100%;
  height: 50px;
  cursor: pointer;
  &:hover {
    background-color: #005fa3;
  }
`;

const LogoImg = styled.img`
  width: 150px;
  margin: 10px auto;
  display: flex;
  cursor: pointer;
`;
export default SignInPage;
