import React from "react";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Router from "./router/Router";
import { MathJax, MathJaxContext } from "better-react-mathjax";

const config = {
    "fast-preview": {
        disabled: true
    },
    tex2jax: {
        inlineMath: [
            ["$", "$"],
            ["\\(", "\\)"]
        ],
        displayMath: [
            ["$$", "$$"],
            ["\\[", "\\]"]
        ]
    },
    messageStyle: "none"
};


function App() {
    return (
        <MathJaxContext
            version={2}
            config={config}
            onStartup={(mathJax) => (mathJax.Hub.processSectionDelay = 0)}
        >
            <RecoilRoot>
                <BrowserRouter>
                    <Router />
                </BrowserRouter>
            </RecoilRoot>
        </MathJaxContext>
    );
}

export default App;
