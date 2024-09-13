// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignInPage from "./pages/signInPage";
import DashBoard from "./pages/DashBoard";
import Header from "./pages/Header";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/signin" element={<SignInPage />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
