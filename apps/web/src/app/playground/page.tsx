"use client";

import { useState } from "react";
import { SectionIntro } from "@/components/section-intro";
import { apiProducts } from "@/lib/site-content";

export default function PlaygroundPage() {
  const [income, setIncome] = useState("75000");
  const [state, setState] = useState("CA");
  const [year, setYear] = useState("2025");
  const [filingStatus, setFilingStatus] = useState("single");

  const requestBody = `{
  "year": ${year},
  "location": "${state}",
  "household": {
    "filing_status": "${filingStatus}",
    "employment_income": ${income}
  }
}`;

  const curlCommand = `curl https://api.cosilico.ai/calculate \\
  -H "Authorization: Bearer $COSILICO_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '${requestBody}'`;

  return (
    <section className="section-block page-top section-last">
      <div className="page-wrap">
        <SectionIntro
          eyebrow="Playground"
          as="h1"
          title={<>Compose the request before you compose the UI.</>}
          description="This page intentionally generates request scaffolds only. It does not fabricate response data. The point is to make the API shape concrete without pretending a mock console is live."
        />

        <div className="split-grid mt-8">
          <div className="panel p-6">
            <p className="section-kicker">Request composer</p>
            <h2 className="panel-title">Household calculation scaffold</h2>
            <div className="space-y-4">
              <PlaygroundField
                label="Employment income"
                value={income}
                onChange={setIncome}
              />
              <PlaygroundField
                label="State"
                value={state}
                onChange={setState}
              />
              <PlaygroundField
                label="Tax year"
                value={year}
                onChange={setYear}
              />
              <label className="block">
                <span className="field-label">Filing status</span>
                <select
                  value={filingStatus}
                  onChange={(event) => setFilingStatus(event.target.value)}
                  className="field-select"
                >
                  <option value="single">single</option>
                  <option value="married_joint">married_joint</option>
                  <option value="head_of_household">head_of_household</option>
                </select>
              </label>
            </div>
          </div>

          <div className="space-y-4">
            <div className="panel p-6">
              <p className="section-kicker">cURL</p>
              <h2 className="panel-title">Command scaffold</h2>
              <pre>{curlCommand}</pre>
              <p className="panel-note">
                Illustrative request scaffold. Replace the API key and payload
                with production values.
              </p>
            </div>

            <div className="panel p-6">
              <p className="section-kicker">JSON payload</p>
              <h2 className="panel-title">Body shape</h2>
              <pre>{requestBody}</pre>
            </div>
          </div>
        </div>

        <div className="endpoint-grid mt-8">
          {apiProducts.map((product) => (
            <article key={product.endpoint} className="endpoint-card">
              <p className="story-index">{product.endpoint}</p>
              <h2 className="endpoint-title">{product.endpoint}</h2>
              <p className="endpoint-copy">{product.body}</p>
            </article>
          ))}
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
      <span className="field-label">{label}</span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="field-input"
      />
    </label>
  );
}
