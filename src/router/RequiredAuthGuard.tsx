import React, { ReactNode } from "react";
import { Route, Navigate } from "react-router-dom";
import Cookies from "js-cookie";

interface RequiredAuthGuardProps {
  children: ReactNode;
}

const RequiredAuthGuard = ({ children }: RequiredAuthGuardProps) => {
  // JWT 토큰 가져오기
  const jwtToken = Cookies.get("accessToken");

  // 인증 여부 확인
  const isAuthenticated = jwtToken !== undefined && jwtToken !== null;

  // 인증되지 않은 경우 리디렉션
  if (!isAuthenticated) {
    return <Navigate to="/signin" />;
  }

  // 인증된 경우 자식 컴포넌트 렌더링
  return <>{children}</>;
};

export default RequiredAuthGuard;
