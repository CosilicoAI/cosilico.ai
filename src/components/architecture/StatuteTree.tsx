import React from "react";
import * as styles from "../../styles/architecture.css";

export interface TreeNode {
  id: string;
  label: string;
  file?: string;
  indexed?: boolean;
  isIndexingRule?: boolean;
  isTest?: boolean;
  isIntegrationTest?: boolean;
  children?: TreeNode[];
}

interface StatuteTreeProps {
  node: TreeNode;
  depth?: number;
  selected: string | null;
  onSelect: (id: string) => void;
  expanded: Set<string>;
  onToggle: (id: string) => void;
}

export function StatuteTree({
  node,
  depth = 0,
  selected,
  onSelect,
  expanded,
  onToggle,
}: StatuteTreeProps) {
  const hasChildren = node.children && node.children.length > 0;
  const isExpanded = expanded.has(node.id);
  const isSelected = selected === node.id;
  const hasFile = !!node.file;

  return (
    <div className={styles.treeNode} style={{ marginLeft: depth * 16 }}>
      <div
        className={`${styles.treeItem} ${isSelected ? styles.treeItemSelected : ""}`}
        data-testid={`tree-item-${node.id}`}
        data-selected={isSelected}
        onClick={() => {
          if (hasChildren) onToggle(node.id);
          if (hasFile) onSelect(node.id);
        }}
      >
        {hasChildren && (
          <span className={`${styles.treeToggle} ${isExpanded ? styles.treeToggleExpanded : ""}`}>
            ▶
          </span>
        )}
        <span className={styles.treeLabel}>{node.label}</span>
        {node.indexed && <span className={`${styles.treeBadge} ${styles.treeBadgeIndexed}`}>indexed</span>}
        {node.isIndexingRule && <span className={`${styles.treeBadge} ${styles.treeBadgeIndexing}`}>CPI</span>}
        {node.isTest && <span className={`${styles.treeBadge} ${styles.treeBadgeTest}`}>unit</span>}
        {node.isIntegrationTest && <span className={`${styles.treeBadge} ${styles.treeBadgeIntegration}`}>e2e</span>}
        {hasFile && !node.indexed && !node.isIndexingRule && !node.isTest && !node.isIntegrationTest && (
          <span className={styles.treeFile}>{node.file}</span>
        )}
      </div>
      {hasChildren && isExpanded && (
        <div className={styles.treeChildren}>
          {node.children!.map((child) => (
            <StatuteTree
              key={child.id}
              node={child}
              depth={depth + 1}
              selected={selected}
              onSelect={onSelect}
              expanded={expanded}
              onToggle={onToggle}
            />
          ))}
        </div>
      )}
    </div>
  );
}
