"use client";

import { useState } from "react";

export default function PlaygroundPage() {
  const [income, setIncome] = useState("75000");
  const [state, setState] = useState("CA");

  return (
    <section className="relative z-10 min-h-screen pt-32 pb-24">
      <div className="mx-auto max-w-4xl px-6">
        <p className="eyebrow mb-4">Playground</p>
        <h1 className="heading-page mb-8">
          Try the <span className="italic text-secondary">simulation.</span>
        </h1>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Input */}
          <div className="card p-6">
            <h2 className="font-mono mb-6 text-sm tracking-wide text-muted">
              Input
            </h2>
            <div className="space-y-4">
              <PlaygroundField
                label="Income"
                value={income}
                onChange={setIncome}
              />
              <PlaygroundField
                label="State"
                value={state}
                onChange={setState}
              />
            </div>
          </div>

          {/* Output */}
          <div className="card p-6">
            <h2 className="font-mono mb-6 text-sm tracking-wide text-muted">
              API request
            </h2>
            <pre
              className="font-mono rounded-lg p-4 text-xs leading-relaxed"
              style={{
                background: "var(--color-elevated)",
                border: "1px solid var(--color-border-subtle)",
              }}
            >
              <span style={{ color: "var(--color-cyan-dim)" }}>GET</span>{" "}
              <span className="text-secondary">
                api.cosilico.ai/calculate
              </span>
              {"\n  "}
              <span className="text-muted">?income=</span>
              <span style={{ color: "var(--color-amber)" }}>{income}</span>
              {"\n  "}
              <span className="text-muted">&state=</span>
              <span style={{ color: "var(--color-amber)" }}>{state}</span>
            </pre>
            <p className="mt-4 text-xs text-muted">
              API coming soon — playground will connect to live endpoints.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

type PlaygroundFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
};

function PlaygroundField({ label, value, onChange }: PlaygroundFieldProps) {
  return (
    <label className="block">
      <span className="font-mono mb-1.5 block text-xs text-muted">
        {label}
      </span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="font-mono w-full rounded-lg border px-3 py-2 text-sm outline-none transition-colors focus:border-[var(--color-cyan-dim)]"
        style={{
          borderColor: "var(--color-border)",
          background: "var(--color-elevated)",
          color: "var(--color-text)",
        }}
      />
    </label>
  );
}
