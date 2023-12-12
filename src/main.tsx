import React from "react";
import ReactDOM from "react-dom/client";
// import '@css/index.css'
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/900.css";
import "@fontsource/lato/700.css";
//import App from './App.tsx'
import "@css/index.css";
import Login from "@pages/Login";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>,
);
