import React from "react";
import * as styles from "../../styles/thesis.css";

export function CheckIcon() {
  return <span className={styles.checkIcon}>✓</span>;
}

export function XIcon() {
  return <span className={styles.xIcon}>—</span>;
}

export function PartialIcon() {
  return <span className={styles.partialIcon}>◐</span>;
}

export function CapabilityCell({ value }: { value: boolean | "partial" }) {
  if (value === true) return <CheckIcon />;
  if (value === "partial") return <PartialIcon />;
  return <XIcon />;
}
