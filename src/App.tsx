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
import FusionGanPage from "./pages/FusionGanPage";
import ExperimentPage from "./pages/ExperimentPage";
import ExperimentLabPage from "./pages/ExperimentLabPage";
import ProgressPage from "./pages/ProgressPage";
import PortalPage from "./pages/PortalPage";
import PopdgpEvalPage from "./pages/PopdgpEvalPage";
import PopdgpPage from "./pages/PopdgpPage";
import MicrosynthPage from "./pages/MicrosynthPage";
import DesignPage from "./pages/DesignPage";
import BrandPage from "./pages/BrandPage";
import WritingGuidePage from "./pages/WritingGuidePage";
import AssetsPage from "./pages/AssetsPage";
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
          <Route path="/stack/autorac/lab" element={<ExperimentLabPage />} />
          <Route path="/stack/fusiongan" element={<FusionGanPage />} />
          <Route path="/stack/popdgp" element={<PopdgpPage />} />
          <Route path="/stack/popdgp/eval" element={<PopdgpEvalPage />} />
          <Route path="/stack/microsynth" element={<MicrosynthPage />} />
          <Route path="/architecture/encoding/experiment" element={<ExperimentPage />} />
          <Route path="/progress" element={<ProgressPage />} />
          <Route path="/portal" element={<PortalPage />} />
          {/* Brand */}
          <Route path="/brand" element={<BrandPage />} />
          <Route path="/brand/design" element={<DesignPage />} />
          <Route path="/brand/writing" element={<WritingGuidePage />} />
          <Route path="/brand/assets" element={<AssetsPage />} />
          {/* Legacy redirect */}
          <Route path="/design" element={<DesignPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
