import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Validation — Cosilico",
  description: "Encoding accuracy metrics and validation results.",
};

export default function ValidationPage() {
  return (
    <section className="relative z-10 min-h-screen pt-32 pb-24">
      <div className="mx-auto max-w-4xl px-6">
        <p className="eyebrow mb-4">Validation</p>
        <h1 className="heading-page mb-8">
          Accuracy <span className="italic text-secondary">metrics.</span>
        </h1>
        <p className="mb-12 text-lg text-secondary">
          Every encoding is validated against multiple external systems. Results
          are updated on each push to the rules repository.
        </p>

        {/* This will be populated with real validation data from CI */}
        <div className="card-elevated p-8 text-center">
          <p className="text-muted">
            Validation dashboard will load results from CI pipeline.
          </p>
        </div>
      </div>
    </section>
  );
}
