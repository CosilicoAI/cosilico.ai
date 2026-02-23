export function Vision() {
  return (
    <section className="relative z-10 py-32">
      <div className="glow-line mx-auto max-w-6xl mb-32" />

      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="eyebrow mb-4">Why</p>
        <h2 className="heading-section mb-8">
          The coordination{" "}
          <span className="italic text-secondary">problem.</span>
        </h2>

        <div className="space-y-6 text-left">
          <p className="text-base leading-relaxed text-secondary">
            Tax policy affects every household, every business, every
            investment decision. Yet the models used to evaluate it are
            closed, aggregate, and unvalidated. Legislators vote on
            trillion-dollar bills scored by black boxes. Financial firms
            price risk with models they can&apos;t inspect. Researchers
            publish with data they can&apos;t share.
          </p>
          <p className="text-base leading-relaxed text-secondary">
            The result is society-wide miscoordination. Not because people
            disagree on values — but because they can&apos;t agree on
            facts. Every institution builds its own partial model, none of
            them interoperate, and the gaps between them are where bad
            policy hides.
          </p>
          <p className="text-base leading-relaxed">
            Cosilico is the shared substrate. A simulation everyone can
            query, so decisions are grounded in the same reality.
          </p>
        </div>
      </div>
    </section>
  );
}
