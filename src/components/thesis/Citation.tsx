import React, { useState } from "react";
import { sources } from "../../data/thesis";

export function Cite({ id }: { id: number }) {
  const [showCard, setShowCard] = useState(false);
  const source = sources.find(s => s.id === id);
  if (!source) return null;

  return (
    <span className="cite-wrapper">
      <sup
        className="cite"
        onMouseEnter={() => setShowCard(true)}
        onMouseLeave={() => setShowCard(false)}
        onClick={() => window.open(source.url, "_blank")}
      >
        [{id}]
      </sup>
      {showCard && (
        <div className="cite-card">
          <div className="cite-title">{source.title}</div>
          {source.author && <div className="cite-author">{source.author}, {source.year}</div>}
          <a href={source.url} target="_blank" rel="noopener noreferrer" className="cite-link">
            View source →
          </a>
        </div>
      )}
    </span>
  );
}
