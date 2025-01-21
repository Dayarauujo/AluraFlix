import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { ToastContainer } from "react-toastify";

import Home from "./pages/Home";
import NewVideo from "./pages/NewVideo";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/novo-video" element={<NewVideo />} />
      </Routes>
    </BrowserRouter>
    <ToastContainer />
  </React.StrictMode>
);
