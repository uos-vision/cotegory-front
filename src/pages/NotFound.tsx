import React from "react";
import styled from "styled-components";
function NotFound() {
  return (
    <SignInWrapper>
      <body>
        페이지를 찾을 수 없지만, 코테 합격의 길은 Cotegory에 있습니다.
      </body>
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
export default NotFound;
