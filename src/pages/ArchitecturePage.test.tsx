import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ArchitecturePage from "./ArchitecturePage";

describe("ArchitecturePage", () => {
  test("renders hero section with main heading", () => {
    render(<ArchitecturePage />);
    expect(screen.getByText("LAW = CODE")).toBeInTheDocument();
  });

  test("renders core principles section", () => {
    render(<ArchitecturePage />);
    expect(screen.getByText("PATH = CITATION")).toBeInTheDocument();
    expect(screen.getByText("INDEXED BY DESIGN")).toBeInTheDocument();
    expect(screen.getByText("LEGAL DIFF = CODE DIFF")).toBeInTheDocument();
  });

  test("renders statute tree explorer", () => {
    render(<ArchitecturePage />);
    expect(screen.getByText("Statute → Code Explorer")).toBeInTheDocument();
    expect(screen.getByText("§32 - EITC")).toBeInTheDocument();
  });

  test("shows code sample when statute section is selected", () => {
    render(<ArchitecturePage />);
    // Default selection is 32/a/1
    expect(screen.getByText(/module statute.26.32.a.1/)).toBeInTheDocument();
  });

  test("renders indexing demo section", () => {
    render(<ArchitecturePage />);
    expect(screen.getByText("Three-Tier Parameter Resolution")).toBeInTheDocument();
    expect(screen.getByText("PARAMETER RESOLVER")).toBeInTheDocument();
  });

  test("renders multi-jurisdiction architecture section", () => {
    render(<ArchitecturePage />);
    expect(screen.getByText("Multi-Jurisdiction Architecture")).toBeInTheDocument();
    // Use getAllByText since "cosilico-engine" appears in both the terminal and the repo diagram
    expect(screen.getAllByText("cosilico-engine").length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText("cosilico-us")).toBeInTheDocument();
    expect(screen.getByText("cosilico-uk")).toBeInTheDocument();
  });

  test("renders comparison section with OpenFisca and Catala", () => {
    render(<ArchitecturePage />);
    expect(screen.getByText("How Cosilico Compares")).toBeInTheDocument();
    expect(screen.getByText("OpenFisca")).toBeInTheDocument();
    expect(screen.getByText("Catala")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /openfisca.org/i })).toHaveAttribute(
      "href",
      "https://openfisca.org"
    );
    expect(screen.getByRole("link", { name: /catala-lang.org/i })).toHaveAttribute(
      "href",
      "https://catala-lang.org"
    );
  });

  test("renders CTA section with GitHub link", () => {
    render(<ArchitecturePage />);
    expect(screen.getByText("Explore the Source")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /View on GitHub/i })).toHaveAttribute(
      "href",
      "https://github.com/PolicyEngine/cosilico-engine"
    );
  });
});
