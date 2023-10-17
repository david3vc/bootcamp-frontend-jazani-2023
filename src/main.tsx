// import React from 'react';
import { RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";

import "@popperjs/core";
import "bootstrap";

import "./core/styles/app.scss";

import router from "./core/router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <RouterProvider router={router} />
);
