export function CTA() {
  return (
    <section className="relative z-10 py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2
          className="font-display mb-8"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            lineHeight: 1,
          }}
        >
          Query{" "}
          <span
            className="italic"
            style={{
              background:
                "linear-gradient(135deg, var(--color-cyan), var(--color-cyan-bright))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            the simulation.
          </span>
        </h2>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a href="https://docs.cosilico.ai" className="btn-primary">
            Get started
          </a>
          <a href="mailto:hello@cosilico.ai" className="btn-outline">
            Talk to us
          </a>
        </div>
      </div>
    </section>
  );
}
