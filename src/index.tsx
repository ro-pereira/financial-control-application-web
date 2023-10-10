import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import "./globalStyle.sass";
import Home from "./page/Home/Home";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Header />
    <Home />
  </React.StrictMode>
);
