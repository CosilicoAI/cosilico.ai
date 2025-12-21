import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ThesisPage from "./pages/ThesisPage";
import ArchitecturePage from "./pages/ArchitecturePage";
import PricingPage from "./pages/PricingPage";
import StructurePage from "./pages/StructurePage";
import PlaygroundPage from "./pages/PlaygroundPage";
import CalibrationPage from "./pages/CalibrationPage";
import CosilicoPipeline from "./components/CosilicoPipeline";

const FULL_PAGE_ROUTES = ["/thesis", "/structure", "/playground"];

function AppContent() {
  const { pathname } = useLocation();
  const hideNav = FULL_PAGE_ROUTES.includes(pathname);

  return (
    <div className="App">
      {!hideNav && (
        <nav className="nav" aria-label="Main navigation">
          <div className="nav-container">
            <a href="/" className="nav-logo">
              <img src="/cosilico-logo-dark.svg" alt="Cosilico logo" className="nav-logo-icon" />
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
        <Route path="/calibration" element={<CalibrationPage />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
