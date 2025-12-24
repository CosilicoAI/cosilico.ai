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
    expect(screen.getByText(/variable earned_income_credit/)).toBeInTheDocument();
  });

  test("renders indexing demo section", () => {
    render(<ArchitecturePage />);
    expect(screen.getByText("Three-Tier Parameter Resolution")).toBeInTheDocument();
    expect(screen.getByText("PARAMETER RESOLVER")).toBeInTheDocument();
  });

  test("renders repository architecture section", () => {
    render(<ArchitecturePage />);
    expect(screen.getByText("Repository Architecture")).toBeInTheDocument();
    // Use getAllByText since these appear in multiple places (terminal and repo diagram)
    expect(screen.getAllByText("cosilico-engine").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("cosilico-us").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("cosilico-uk").length).toBeGreaterThanOrEqual(1);
  });

  test("renders comparison section with frameworks", () => {
    render(<ArchitecturePage />);
    expect(screen.getByText("How Cosilico Compares")).toBeInTheDocument();
    expect(screen.getByText("PolicyEngine")).toBeInTheDocument();
    expect(screen.getByText("OpenFisca")).toBeInTheDocument();
    expect(screen.getByText("Tax-Calculator")).toBeInTheDocument();
    expect(screen.getByText("TAXSIM")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /policyengine.org/i })).toHaveAttribute(
      "href",
      "https://policyengine.org"
    );
    expect(screen.getByRole("link", { name: /taxsim.nber.org/i })).toHaveAttribute(
      "href",
      "https://taxsim.nber.org"
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
