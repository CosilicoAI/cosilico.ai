import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <div className="nav-container">
          <a href="/" className="nav-logo">cosilico</a>
          <div className="nav-links">
            <a href="https://docs.cosilico.ai">Docs</a>
            <a href="https://github.com/PolicyEngine">GitHub</a>
            <a href="mailto:hello@cosilico.ai">Contact</a>
          </div>
        </div>
      </nav>
      <HomePage />
    </div>
  );
}

export default App;
