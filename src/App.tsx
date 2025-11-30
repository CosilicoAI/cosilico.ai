import React, { useState } from "react";
import "./App.css";
import { Tab, Layer, Flow, Component } from "./data/types";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PitchDeck from "./components/PitchDeck";
import { HomePage, ArchitecturePage, DemoPage, PlanPage } from "./pages";

function App() {
  const [activeTab, setActiveTab] = useState<Tab>("home");
  const [selectedComponent, setSelectedComponent] = useState<Component | null>(null);
  const [selectedLayer, setSelectedLayer] = useState<Layer | null>(null);
  const [activeFlow, setActiveFlow] = useState<Flow | null>(null);
  const [flowStep, setFlowStep] = useState(0);

  return (
    <div className="App">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "home" && <HomePage setActiveTab={setActiveTab} />}

      {activeTab === "architecture" && (
        <ArchitecturePage
          selectedComponent={selectedComponent}
          setSelectedComponent={setSelectedComponent}
          selectedLayer={selectedLayer}
          setSelectedLayer={setSelectedLayer}
          activeFlow={activeFlow}
          setActiveFlow={setActiveFlow}
          flowStep={flowStep}
          setFlowStep={setFlowStep}
        />
      )}

      {activeTab === "demo" && <DemoPage />}

      {activeTab === "plan" && <PlanPage />}

      {activeTab === "deck" && (
        <div className="deck-container">
          <PitchDeck />
        </div>
      )}

      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}

export default App;
