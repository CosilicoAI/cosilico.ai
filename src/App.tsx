import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ThesisPage from "./pages/ThesisPage";
import ArchitecturePage from "./pages/ArchitecturePage";
import PricingPage from "./pages/PricingPage";
import StructurePage from "./pages/StructurePage";
import PlaygroundPage from "./pages/PlaygroundPage";
import CosilicoPipeline from "./components/CosilicoPipeline";

function App() {
  const pathname = window.location.pathname;
  const hideNav = pathname === "/thesis" || pathname === "/structure" || pathname === "/playground";

  return (
    <BrowserRouter>
      <div className="App">
        {!hideNav && (
          <nav className="nav">
            <div className="nav-container">
              <a href="/" className="nav-logo">
                <img src="/cosilico-logo-dark.svg" alt="" className="nav-logo-icon" />
                cosilico
              </a>
              <div className="nav-links">
                <a href="/playground">Playground</a>
                <a href="/architecture">Architecture</a>
                <a href="https://docs.cosilico.ai">Docs</a>
                <a href="https://github.com/PolicyEngine">GitHub</a>
                <a href="mailto:hello@cosilico.ai">Contact</a>
              </div>
            </div>
          </nav>
        )}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/demo" element={<CosilicoPipeline />} />
          <Route path="/thesis" element={<ThesisPage />} />
          <Route path="/architecture" element={<ArchitecturePage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/structure" element={<StructurePage />} />
          <Route path="/playground" element={<PlaygroundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
