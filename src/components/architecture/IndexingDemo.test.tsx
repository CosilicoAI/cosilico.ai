import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { IndexingDemo } from "./IndexingDemo";

describe("IndexingDemo", () => {
  test("renders parameter resolver header", () => {
    render(<IndexingDemo />);
    expect(screen.getByText("PARAMETER RESOLVER")).toBeInTheDocument();
    expect(screen.getByText("● LIVE")).toBeInTheDocument();
  });

  test("shows 2024 as default year", () => {
    render(<IndexingDemo />);
    expect(screen.getByText("7840")).toBeInTheDocument();
  });

  test("switches year when clicking year buttons", () => {
    render(<IndexingDemo />);

    // Click 2025
    fireEvent.click(screen.getByRole("button", { name: "2025" }));
    expect(screen.getByText("8050")).toBeInTheDocument();

    // Click 2030
    fireEvent.click(screen.getByRole("button", { name: "2030" }));
    expect(screen.getByText("9200")).toBeInTheDocument();
  });

  test("shows fallback notice when no published value exists for year", () => {
    render(<IndexingDemo />);

    // Click 2025 (no published value)
    fireEvent.click(screen.getByRole("button", { name: "2025" }));
    expect(screen.getByText(/No published value for 2025/)).toBeInTheDocument();
  });

  test("shows published tier description for 2024", () => {
    render(<IndexingDemo />);
    expect(screen.getByText("Official IRS value from Rev. Proc.")).toBeInTheDocument();
  });

  test("displays tier buttons", () => {
    render(<IndexingDemo />);
    expect(screen.getByRole("button", { name: "PUBL" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "PROJ" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "CALC" })).toBeInTheDocument();
  });

  test("switches tier when clicking tier buttons", () => {
    render(<IndexingDemo />);

    fireEvent.click(screen.getByRole("button", { name: "CALC" }));
    expect(screen.getByText("On-the-fly from base year × index ratio")).toBeInTheDocument();
  });
});
