import React from "react";
import * as styles from "../../styles/thesis.css";
import {
  CheckIcon as CheckSvgIcon,
  XIcon as XSvgIcon,
  PartialIcon as PartialSvgIcon,
} from "../icons";

export function CheckIcon() {
  return <span className={styles.checkIcon}><CheckSvgIcon size={16} /></span>;
}

export function XIcon() {
  return <span className={styles.xIcon}><XSvgIcon size={16} /></span>;
}

export function PartialIcon() {
  return <span className={styles.partialIcon}><PartialSvgIcon size={16} /></span>;
}

export function CapabilityCell({ value }: { value: boolean | "partial" }) {
  if (value === true) return <CheckIcon />;
  if (value === "partial") return <PartialIcon />;
  return <XIcon />;
}
