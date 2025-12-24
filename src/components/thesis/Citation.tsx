import React, { useState } from "react";
import { sources } from "../../data/thesis";
import * as styles from "../../styles/thesis.css";

export function Cite({ id }: { id: number }) {
  const [showCard, setShowCard] = useState(false);
  const source = sources.find(s => s.id === id);
  if (!source) return null;

  return (
    <span className={styles.citeWrapper}>
      <sup
        className={styles.cite}
        onMouseEnter={() => setShowCard(true)}
        onMouseLeave={() => setShowCard(false)}
        onClick={() => window.open(source.url, "_blank")}
      >
        [{id}]
      </sup>
      {showCard && (
        <div className={styles.citeCard}>
          <div className={styles.citeTitle}>{source.title}</div>
          {source.author && <div className={styles.citeAuthor}>{source.author}, {source.year}</div>}
          <a href={source.url} target="_blank" rel="noopener noreferrer" className={styles.citeLink}>
            View source →
          </a>
        </div>
      )}
    </span>
  );
}
