import React from "react";
import styled from "styled-components";
import GlobalStyle from "../theme/GlobalStyle";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import RegisterService from "../api/RegisterService";
import Footer from "../containers/Footer";

function SignUpPage() {
  const [email, setEmail] = React.useState<string>("");
  const [duplicated, setDuplicated] = React.useState<boolean>(true);
  const [password, setPassword] = React.useState<string>("");
  const [passwordCorrect, setPasswordCorrect] = React.useState<string>("");
  const [baekjoon, setBaekjoon] = React.useState<string>("");
  const [exist, setExist] = React.useState<boolean>(false);
  const [nickname, setNickname] = React.useState<string>("");

  const handleClickButton = async () => {
    try {
      const res = await RegisterService.register({
        loginId: email,
        pw: password,
        baekjoonHandle: baekjoon,
        nickName: nickname,
      });
      navigate("/");
      alert("회원가입 완료");
    } catch (error) {
      console.error(error);
    }
  };

  const handleDuplicateCheck = async () => {
    try {
      const res = await RegisterService.duplication({
        loginId: email,
      });

      if (res.duplicated) {
        console.log("존재하는 id입니다.");
        alert("존재하는 id입니다.");
        setEmail("");
        setDuplicated(true);
      } else {
        console.log("사용 가능한 id입니다.");
        alert("사용 가능한 id입니다.");
        setDuplicated(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleBaekjoonHandle = async () => {
    try {
      const res = await RegisterService.baekjoon({
        baekjoonHandle: baekjoon,
      });
      if (res.exist) {
        console.log("존재하는 백준 ID입니다");
        alert("존재하는 백준 ID 입니다");
        setExist(true);
      } else {
        console.log("존재하지 않는 백준 ID 입니다");
        alert("존재하지 않는 백준 ID 입니다");
        setExist(false);
        setBaekjoon("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const isButtonDisabled = React.useMemo(() => {
    return (
      password !== passwordCorrect || // password와 passwordCorrect가 일치하지 않는 경우
      !email || // email이 비어있는 경우
      !password || // password가 비어있는 경우
      !passwordCorrect || // passwordCorrect가 비어있는 경우
      duplicated === true ||
      exist === false
    );
  }, [email, password, passwordCorrect, duplicated, exist]);

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
            <DubButton
              onClick={handleDuplicateCheck}
              style={{
                backgroundColor: duplicated ? "#d9d9d9" : "#788bff",
                color: duplicated ? "#000000" : "#ffffff",
              }}
            >
              {duplicated ? "중복확인" : "확인완료"}
            </DubButton>
          </HorizonLayout>
          <InputBox
            type="text"
            value={email}
            placeholder="아이디"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Text>비밀번호 *</Text>
          <InputBox
            type="password"
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
          {password === passwordCorrect ? (
            ""
          ) : (
            <AlertText>비밀번호가 서로 다릅니다</AlertText>
          )}
          <HorizonLayout>
            <Text>Baekjoon ID *</Text>
            <DubButton
              onClick={handleBaekjoonHandle}
              style={{
                backgroundColor: exist ? "#788bff" : "#d9d9d9",
                color: exist ? "#ffffff" : "#000000",
              }}
            >
              {exist ? "인증완료" : "인증하기"}
            </DubButton>
          </HorizonLayout>{" "}
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
          {email === "" ||
          password === "" ||
          passwordCorrect === "" ||
          baekjoon === "" ? (
            <AlertText>*표시는 필수 입력 사항입니다</AlertText>
          ) : (
            ""
          )}
          <SignUpButton
            type="submit"
            onClick={handleClickButton}
            disabled={isButtonDisabled} // 버튼의 disabled 속성 설정
          >
            가입하기
          </SignUpButton>
          <LogoImg
            onClick={handleLogo}
            src="vertical.png"
            alt="cotegory logo"
          />
        </BoxLayout>
      </SignInBox>
      <Footer />
    </SignInWrapper>
  );
}

const SignInWrapper = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #cecece; /* Change background color */
`;
const SignInBox = styled.section`
  box-sizing: border-box;
  justify-content: center;
  display: flex;
  width: 40%;
  margin-block: 3em;
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
  margin-top: 1em; /* 수정: 상단 마진 조정 */
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
const AlertText = styled.body`
  font-size: 1em;
  margin-top: 2em;
  color: #f03547;
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
  font-weight: 700;
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
  &:disabled {
    background-color: #ababab;
    color: #ececec;
    cursor: default;
  }
`;
const LogoImg = styled.img`
  width: 10em;
  margin: 1em auto;
  display: flex;
  cursor: pointer;
`;
export default SignUpPage;
