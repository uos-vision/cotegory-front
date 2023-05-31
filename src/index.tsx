import React from "react";
import { Helmet } from "react-helmet";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Helmet>
      <title>Cotegory AI 기반 코딩테스트 문제 추천 서비스</title>
      {/* Add other head tags here */}
    </Helmet>
    <App />
  </React.StrictMode>
);

reportWebVitals();
