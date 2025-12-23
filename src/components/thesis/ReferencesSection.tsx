import React from "react";
import { sources } from "../../data/thesis";

export function ReferencesSection() {
  return (
    <div className="thesis-content">
      <h2>References</h2>
      <ol className="reference-list">
        {sources.map(source => (
          <li key={source.id} id={`ref-${source.id}`}>
            {source.author && <span>{source.author}. </span>}
            <em>{source.title}</em>
            {source.year && <span> ({source.year})</span>}.{" "}
            <a href={source.url} target="_blank" rel="noopener noreferrer">
              {source.url.replace(/^https?:\/\//, "").split("/")[0]}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}
