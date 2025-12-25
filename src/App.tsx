import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import ThesisPage from "./pages/ThesisPage";
import ArchitecturePage from "./pages/ArchitecturePage";
import PricingPage from "./pages/PricingPage";
import StructurePage from "./pages/StructurePage";
import PlaygroundPage from "./pages/PlaygroundPage";
import CalibrationPage from "./pages/CalibrationPage";
import ValidationPage from "./pages/ValidationPage";
import PluginDashboardPage from "./pages/PluginDashboardPage";
import MicroplexPage from "./pages/MicroplexPage";
import CosilicoPipeline from "./components/CosilicoPipeline";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/demo" element={<CosilicoPipeline />} />
          <Route path="/thesis" element={<ThesisPage />} />
          <Route path="/architecture" element={<ArchitecturePage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/structure" element={<StructurePage />} />
          <Route path="/playground" element={<PlaygroundPage />} />
          <Route path="/calibration" element={<CalibrationPage />} />
          <Route path="/validation" element={<ValidationPage />} />
          <Route path="/plugin" element={<PluginDashboardPage />} />
          <Route path="/stack/microplex" element={<MicroplexPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
