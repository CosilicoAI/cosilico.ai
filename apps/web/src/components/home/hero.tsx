"use client";

import { useEffect, useState } from "react";
import { ArrowIcon } from "@/components/arrow-icon";

function fadeStyle(visible: boolean, delay: string): React.CSSProperties {
  return {
    opacity: visible ? 1 : 0,
    transform: visible ? "none" : "translateY(20px)",
    transition: `all 0.8s var(--ease-out) ${delay}`,
  };
}

export function Hero() {
  const [visible, setVisible] = useState(false);
  useEffect(() => setVisible(true), []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Radial glow behind hero */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[900px] h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,212,255,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-32 pb-24 text-center">
        {/* Eyebrow */}
        <div
          className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 mb-10"
          style={{
            borderColor: "var(--color-border)",
            background: "var(--color-elevated)",
            ...fadeStyle(visible, "0s"),
            transform: visible ? "none" : "translateY(10px)",
            transition: "all 0.6s var(--ease-out)",
          }}
        >
          <span
            className="inline-block w-1.5 h-1.5 rounded-full"
            style={{ background: "var(--color-green)" }}
          />
          <span className="eyebrow" style={{ textTransform: "none", letterSpacing: "0.05em" }}>
            Open source infrastructure for economic simulation
          </span>
        </div>

        {/* Main headline */}
        <h1
          className="font-display mb-8 leading-[0.95]"
          style={{
            fontSize: "clamp(3rem, 8vw, 6.5rem)",
            ...fadeStyle(visible, "0.1s"),
          }}
        >
          <span>Society,</span>
          <br />
          <span
            className="italic"
            style={{
              background:
                "linear-gradient(135deg, var(--color-cyan), var(--color-cyan-bright))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            in silico.
          </span>
        </h1>

        {/* Subheading */}
        <p
          className="mx-auto max-w-2xl text-lg leading-relaxed text-secondary md:text-xl"
          style={fadeStyle(visible, "0.2s")}
        >
          We simulate the economy. Household by household. Tax by tax.
          Policy by policy.{" "}
          <span className="text-muted">
            Open source infrastructure. APIs for the rest.
          </span>
        </p>

        {/* CTAs */}
        <div
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          style={fadeStyle(visible, "0.35s")}
        >
          <a href="https://docs.cosilico.ai" className="btn-primary group">
            Read the docs
            <ArrowIcon />
          </a>
          <a href="https://rules.foundation" className="btn-outline">
            Open infrastructure
          </a>
        </div>

        {/* Terminal demo */}
        <div
          className="mx-auto mt-20 max-w-2xl"
          style={{
            ...fadeStyle(visible, "0.5s"),
            transform: visible ? "none" : "translateY(30px)",
            transition: "all 1s var(--ease-out) 0.5s",
          }}
        >
          <div
            className="overflow-hidden rounded-xl border"
            style={{
              borderColor: "var(--color-border)",
              background: "var(--color-elevated)",
            }}
          >
            {/* Terminal bar */}
            <div
              className="flex items-center gap-2 px-4 py-2.5 border-b"
              style={{ borderColor: "var(--color-border-subtle)" }}
            >
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              </div>
              <span className="ml-2 font-mono text-xs text-muted">
                cosilico query
              </span>
            </div>

            {/* Terminal content */}
            <div className="p-5 text-left font-mono text-sm leading-relaxed">
              <div className="mb-3">
                <span style={{ color: "var(--color-cyan-dim)" }}>$</span>{" "}
                <span className="text-secondary">
                  cosilico simulate --reform &quot;expand_eitc_50pct&quot;
                </span>
              </div>
              <div className="flex flex-col gap-1.5">
                <div>
                  <span className="text-muted">cost_10yr </span>
                  <span style={{ color: "var(--color-amber)" }}>$147B</span>
                </div>
                <div>
                  <span className="text-muted">affected </span>
                  <span>43M households</span>
                </div>
                <div>
                  <span className="text-muted">poverty </span>
                  <span style={{ color: "var(--color-green)" }}>
                    -2.1pp reduction
                  </span>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t" style={{ borderColor: "var(--color-border-subtle)" }}>
                <span className="text-xs text-muted">
                  Sample output — API coming soon
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
