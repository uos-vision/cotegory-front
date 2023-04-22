import React from "react";
import styled from "styled-components";
import Header from "../containers/Header";
import GlobalStyle from "../theme/GlobalStyle";

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
      <GlobalStyle />
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
  border-radius: 1em;
`;
const BoxLayout = styled.div`
  justify-content: center;
  width: 50%;
  margin: 72px;
`;
const Headline = styled.h1`
  text-align: center;
  font-size: 1.5em;
  margin-top: 1em;
`;
const Text = styled.h2`
  font-size: 1em;
  margin-top: 2em;
  text-align: left;
`;
const InputBox = styled.input`
  font-size: 1em;
  width: 100%;
  height: 3em;
  box-sizing: border-box; /* 추가 */
  padding: 0.5em;
  border: 1px solid #d9d9d9;
  border-radius: 0.75em;
`;
const SubmitButton = styled.button`
  background-color: #5465ff;
  border: none;
  color: #fff;
  font-size: 1em;
  font-weight: bold;
  box-sizing: border-box; /* 추가 */
  border-radius: 0.75em;
  margin-top: 2em;
  width: 100%;
  height: 3em;
  cursor: pointer;
  &:hover {
    background-color: #005fa3;
  }
`;
const SignUpButton = styled.button`
  background-color: #788bff;
  border: none;
  color: #fff;
  font-size: 1em;
  font-weight: bold;
  padding: 0.5em 1em;
  border-radius: 0.75em;
  margin-top: 2em;
  width: 100%;
  height: 3em;
  cursor: pointer;
  &:hover {
    background-color: #005fa3;
  }
`;

const LogoImg = styled.img`
  width: 10em;
  margin: 1em auto;
  display: flex;
  cursor: pointer;
`;
export default SignInPage;
