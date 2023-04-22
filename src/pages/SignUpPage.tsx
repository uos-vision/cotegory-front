import React from "react";
import styled from "styled-components";
import GlobalStyle from "../theme/GlobalStyle";
import { typeOf, isElement, isValidElementType } from "react-is";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

function SignUpPage() {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [passwordCorrect, setPasswordCorrect] = React.useState<string>("");
  const [baekjoon, setBaekjoon] = React.useState<string>("");
  const [nickname, setNickname] = React.useState<string>("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleClickLoginButton = async () => {
    try {
    } catch {}
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate(); // useNavigate로 변경
  const handleLogo = () => {
    navigate("/");
  };

  return (
    <SignInWrapper>
      <GlobalStyle />
      <SignInBox>
        <BoxLayout>
          <Headline>회원가입</Headline>
          <HorizonLayout>
            <Text>아이디 *</Text>
            <DubButton>중복확인</DubButton>
          </HorizonLayout>
          <InputBox
            type="text"
            value={email}
            placeholder="아이디"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Text>비밀번호 *</Text>
          <InputBox
            type="text"
            value={password}
            placeholder="비밀번호"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Text>비밀번호 확인 *</Text>
          <InputBox
            type="password"
            value={passwordCorrect}
            placeholder="비밀번호 확인"
            onChange={(e) => setPasswordCorrect(e.target.value)}
          />
          <Text>Baekjoon ID</Text>
          <InputBox
            type="text"
            value={baekjoon}
            onChange={(e) => setBaekjoon(e.target.value)}
          />
          <Text>닉네임</Text>
          <InputBox
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          <SignUpButton type="submit">가입하기</SignUpButton>
          <LogoImg
            onClick={handleLogo}
            src="vertical.png"
            alt="cotegory logo"
          />
          <Text color="#acacac">*표시는 의무 입력 사항입니다.</Text>
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
  width: 50%;
  margin: 72px;
`;
const HorizonLayout = styled.div`
  display: flex;
  flex-direction: row; /* 수정: 가로로 나란히 배치하도록 변경 */
  align-items: center; /* 세로 정렬을 가운데로 맞춤 */
  justify-content: space-between; /* 왼쪽과 오른쪽에 공간을 나누어 배치 */
  margin-top: 1.5em; /* 수정: 상단 마진 조정 */
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
const DubButton = styled.button`
  background-color: #d9d9d9;
  border-radius: 0.75em;
  width: 6em;
  height: 2.5em;
  border-color: transparent;
  :hover {
    background-color: #c8c8c8;
  }
  cursor: pointer;
  margin-top: 1em;
  /* margin-left: 100px; */
`;

const SignUpButton = styled.button`
  background-color: #788bff;
  border: none;
  color: #fff;
  font-size: 1em;
  font-weight: bold;
  padding: 1em 1.5em;
  border-radius: 0.75em;
  margin-top: 1.5em;
  width: 100%;
  height: 3em;
  box-sizing: border-box; /* 추가 */

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
export default SignUpPage;
