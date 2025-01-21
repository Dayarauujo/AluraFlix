import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './pages/Home';
import './index.css';
import NewVideo from './pages/NewVideo';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/novo-video" element={<NewVideo />} />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);