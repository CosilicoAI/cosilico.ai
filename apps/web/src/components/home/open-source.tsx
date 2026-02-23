import { ArrowIcon } from "@/components/arrow-icon";

const stats = [
  { value: "50+", label: "State tax systems" },
  { value: "100+", label: "Benefit programs" },
  { value: "100M+", label: "Synthetic households" },
];

export function OpenSource() {
  return (
    <section className="relative z-10 py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left -- text */}
          <div>
            <p className="eyebrow mb-4">Foundation</p>
            <h2
              className="font-display mb-6"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1.15,
              }}
            >
              Powered by{" "}
              <span className="italic text-cyan">Rules Foundation.</span>
            </h2>
            <p className="mb-8 text-base leading-relaxed text-secondary">
              Built on open infrastructure: machine-readable encodings of
              statutes, regulations, and policy rules. Cosilico provides
              commercial APIs on top.
            </p>
            <a
              href="https://rules.foundation"
              className="link-cyan inline-flex items-center gap-2 text-sm no-underline"
            >
              Learn about Rules Foundation
              <ArrowIcon />
            </a>
          </div>

          {/* Right -- stats */}
          <div className="grid-divider grid grid-cols-3 gap-px">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center py-10 px-4 text-center"
              >
                <span className="font-display mb-2 text-3xl text-cyan">
                  {stat.value}
                </span>
                <span className="font-mono text-xs leading-tight text-muted">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
