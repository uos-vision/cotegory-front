import React from "react";
import styled from "styled-components";
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
            onChange={(e) => setEmail(e.target.value)}
          />
          <Text>비밀번호 *</Text>
          <InputBox
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Text>비밀번호 확인 *</Text>
          <InputBox
            type="password"
            value={passwordCorrect}
            onChange={(e) => setPasswordCorrect(e.target.value)}
          />
          <Text>Baekjoon ID</Text>
          <InputBox
            type="text"
            value={passwordCorrect}
            onChange={(e) => setPasswordCorrect(e.target.value)}
          />
          <SignUpButton type="submit">가입하기</SignUpButton>
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
  width: 50%;
  margin: 72px;
`;
const HorizonLayout = styled.div`
  display: flex;
  flex-direction: row; /* 수정: 가로로 나란히 배치하도록 변경 */
  align-items: center; /* 세로 정렬을 가운데로 맞춤 */
  justify-content: space-between; /* 왼쪽과 오른쪽에 공간을 나누어 배치 */
  margin-top: 20px; /* 수정: 상단 마진 조정 */
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
const DubButton = styled.button`
  background-color: #d9d9d9;
  border-radius: 10px;
  width: 80px;
  height: 30px;
  border-color: transparent;
  :hover {
    background-color: #c8c8c8;
  }
  cursor: pointer;
  margin-top: 15px;
  /* margin-left: 100px; */
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
export default SignUpPage;
