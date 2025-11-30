import React from "react";
import Logo from "./Logo";
import { Tab } from "../data/types";

interface NavbarProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  return (
    <nav className="navbar">
      <div className="container">
        <a
          href="/"
          aria-label="Cosilico home"
          style={{ textDecoration: "none" }}
        >
          <Logo size={40} />
        </a>
        <div className="nav-links">
          <button
            className={`nav-tab ${activeTab === "home" ? "active" : ""}`}
            onClick={() => setActiveTab("home")}
          >
            Home
          </button>
          <button
            className={`nav-tab ${activeTab === "architecture" ? "active" : ""}`}
            onClick={() => setActiveTab("architecture")}
          >
            Architecture
          </button>
          <button
            className={`nav-tab ${activeTab === "demo" ? "active" : ""}`}
            onClick={() => setActiveTab("demo")}
          >
            Demo
          </button>
          <button
            className={`nav-tab ${activeTab === "plan" ? "active" : ""}`}
            onClick={() => setActiveTab("plan")}
          >
            Plan
          </button>
          <button
            className={`nav-tab ${activeTab === "deck" ? "active" : ""}`}
            onClick={() => setActiveTab("deck")}
          >
            Deck
          </button>
          <a
            href="https://github.com/CosilicoAI/cosilico-engine"
            className="desktop-only"
          >
            Engine
          </a>
          <a
            href="https://github.com/CosilicoAI"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}
