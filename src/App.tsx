import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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
import PyStatmatchPage from "./pages/PyStatmatchPage";
import StackPage from "./pages/StackPage";
import RacPage from "./pages/RacPage";
import AtlasPage from "./pages/AtlasPage";
import ArchPage from "./pages/ArchPage";
import AutoRacPage from "./pages/AutoRacPage";
import ExperimentPage from "./pages/ExperimentPage";
import ProgressPage from "./pages/ProgressPage";
import PortalPage from "./pages/PortalPage";
import CosilicoPipeline from "./components/CosilicoPipeline";

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
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
          <Route path="/stack/py-statmatch" element={<PyStatmatchPage />} />
          <Route path="/stack/atlas" element={<AtlasPage />} />
          <Route path="/stack/arch" element={<ArchPage />} />
          <Route path="/stack/autorac" element={<AutoRacPage />} />
          <Route path="/architecture/encoding/experiment" element={<ExperimentPage />} />
          <Route path="/progress" element={<ProgressPage />} />
          <Route path="/portal" element={<PortalPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
