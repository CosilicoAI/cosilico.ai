import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { StatuteTree, TreeNode } from "./StatuteTree";

const mockTree: TreeNode = {
  id: "32",
  label: "§32 - EITC",
  children: [
    {
      id: "32/a",
      label: "(a) Allowance",
      children: [
        { id: "32/a/1", label: "(1) Credit Amount", file: "earned_income_credit.cosilico" },
      ],
    },
  ],
};

describe("StatuteTree", () => {
  test("renders tree node label", () => {
    render(
      <StatuteTree
        node={mockTree}
        selected={null}
        onSelect={jest.fn()}
        expanded={new Set()}
        onToggle={jest.fn()}
      />
    );
    expect(screen.getByText("§32 - EITC")).toBeInTheDocument();
  });

  test("shows children when expanded", () => {
    render(
      <StatuteTree
        node={mockTree}
        selected={null}
        onSelect={jest.fn()}
        expanded={new Set(["32", "32/a"])}
        onToggle={jest.fn()}
      />
    );
    expect(screen.getByText("(a) Allowance")).toBeInTheDocument();
    expect(screen.getByText("(1) Credit Amount")).toBeInTheDocument();
  });

  test("hides children when collapsed", () => {
    render(
      <StatuteTree
        node={mockTree}
        selected={null}
        onSelect={jest.fn()}
        expanded={new Set()}
        onToggle={jest.fn()}
      />
    );
    expect(screen.queryByText("(a) Allowance")).not.toBeInTheDocument();
  });

  test("calls onToggle when clicking node with children", () => {
    const onToggle = jest.fn();
    render(
      <StatuteTree
        node={mockTree}
        selected={null}
        onSelect={jest.fn()}
        expanded={new Set()}
        onToggle={onToggle}
      />
    );
    fireEvent.click(screen.getByText("§32 - EITC"));
    expect(onToggle).toHaveBeenCalledWith("32");
  });

  test("calls onSelect when clicking node with file", () => {
    const onSelect = jest.fn();
    render(
      <StatuteTree
        node={mockTree}
        selected={null}
        onSelect={onSelect}
        expanded={new Set(["32", "32/a"])}
        onToggle={jest.fn()}
      />
    );
    fireEvent.click(screen.getByText("(1) Credit Amount"));
    expect(onSelect).toHaveBeenCalledWith("32/a/1");
  });

  test("applies selected class to selected node", () => {
    render(
      <StatuteTree
        node={mockTree}
        selected="32/a/1"
        onSelect={jest.fn()}
        expanded={new Set(["32", "32/a"])}
        onToggle={jest.fn()}
      />
    );
    const selectedItem = screen.getByText("(1) Credit Amount").closest(".tree-item");
    expect(selectedItem).toHaveClass("selected");
  });

  test("displays file name for leaf nodes", () => {
    render(
      <StatuteTree
        node={mockTree}
        selected={null}
        onSelect={jest.fn()}
        expanded={new Set(["32", "32/a"])}
        onToggle={jest.fn()}
      />
    );
    expect(screen.getByText("earned_income_credit.cosilico")).toBeInTheDocument();
  });
});
