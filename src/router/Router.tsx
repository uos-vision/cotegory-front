import React from "react";
import { Route, Routes } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import {
  SignInPage,
  SignUpPage,
  MainPage,
  NotFound,
  CotegoryPage,
} from "../pages";

function Router() {
  React.useEffect(() => {});

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/cotegory" element={<CotegoryPage />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
