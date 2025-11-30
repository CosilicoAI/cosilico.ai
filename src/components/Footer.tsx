import React from "react";
import Logo from "./Logo";
import { Tab } from "../data/types";

interface FooterProps {
  setActiveTab: (tab: Tab) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <Logo size={40} />
            <p className="footer-tagline">Simulating society together</p>
          </div>
          <div className="footer-sections">
            <div className="footer-section">
              <h5>Platform</h5>
              <a href="https://github.com/CosilicoAI/cosilico-engine">
                Rules Engine
              </a>
              <button
                onClick={() => setActiveTab("architecture")}
                className="footer-link-btn"
              >
                Architecture
              </button>
            </div>
            <div className="footer-section">
              <h5>Resources</h5>
              <a href="https://github.com/CosilicoAI/cosilico-engine/blob/main/docs/DESIGN.md">
                Design Doc
              </a>
              <a href="https://github.com/CosilicoAI">GitHub</a>
            </div>
            <div className="footer-section">
              <h5>Built With</h5>
              <a
                href="https://policyengine.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                PolicyEngine
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Cosilico Inc. Open source under Apache 2.0.</p>
        </div>
      </div>
    </footer>
  );
}
