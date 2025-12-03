import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ThesisPage from "./pages/ThesisPage";

function App() {
  const isThesisPage = window.location.pathname === "/thesis";

  return (
    <BrowserRouter>
      <div className="App">
        {!isThesisPage && (
          <nav className="nav">
            <div className="nav-container">
              <a href="/" className="nav-logo">
                <img src="/cosilico-logo-dark.svg" alt="" className="nav-logo-icon" />
                cosilico
              </a>
              <div className="nav-links">
                <a href="https://docs.cosilico.ai">Docs</a>
                <a href="https://github.com/PolicyEngine">GitHub</a>
                <a href="mailto:hello@cosilico.ai">Contact</a>
              </div>
            </div>
          </nav>
        )}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/thesis" element={<ThesisPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
