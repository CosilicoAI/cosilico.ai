import React from "react";

export function CheckIcon() {
  return <span className="check-icon">✓</span>;
}

export function XIcon() {
  return <span className="x-icon">—</span>;
}

export function PartialIcon() {
  return <span className="partial-icon">◐</span>;
}

export function CapabilityCell({ value }: { value: boolean | "partial" }) {
  if (value === true) return <CheckIcon />;
  if (value === "partial") return <PartialIcon />;
  return <XIcon />;
}
