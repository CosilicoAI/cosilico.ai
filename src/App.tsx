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
import StackPage from "./pages/StackPage";
import RacPage from "./pages/RacPage";
import ExperimentPage from "./pages/ExperimentPage";
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
          <Route path="/stack" element={<StackPage />} />
          <Route path="/stack/.rac" element={<RacPage />} />
          <Route path="/stack/microplex" element={<MicroplexPage />} />
          <Route path="/architecture/encoding/experiment" element={<ExperimentPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
