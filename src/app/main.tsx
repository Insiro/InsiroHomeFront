import React from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

import "@/shared/ui/base.css";
import { RecoilRoot } from "recoil";
import { MainRouter } from "./router";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RecoilRoot>
            <MainRouter />
        </RecoilRoot>
    </React.StrictMode>
);
