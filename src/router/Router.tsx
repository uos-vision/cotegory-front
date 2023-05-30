import React from "react";
import { Route, Routes } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import {
  SignInPage,
  SignUpPage,
  MainPage,
  NotFound,
  CotegoryPage,
  RecommendPage,
  ProfilePage,
  ResultPage,
  ProblemPage,
} from "../pages";
import RequiredAuthGuard from "./RequiredAuthGuard";

function Router() {
  React.useEffect(() => {});

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route
        path="/cotegory"
        element={
          <RequiredAuthGuard>
            <CotegoryPage />
          </RequiredAuthGuard>
        }
      />
      <Route
        path="/recommend"
        element={
          <RequiredAuthGuard>
            <RecommendPage />
          </RequiredAuthGuard>
        }
      />
      <Route
        path="/profile"
        element={
          <RequiredAuthGuard>
            <ProfilePage />
          </RequiredAuthGuard>
        }
      />
      <Route
        path="/result"
        element={
          <RequiredAuthGuard>
            <ResultPage />
          </RequiredAuthGuard>
        }
      />
      <Route
        path="/problem"
        element={
          <RequiredAuthGuard>
            <ProblemPage />
          </RequiredAuthGuard>
        }
      />

      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
