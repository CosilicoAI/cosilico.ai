import React from "react";

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
    <div className="tree-node" style={{ marginLeft: depth * 16 }}>
      <div
        className={`tree-item ${isSelected ? "selected" : ""} ${hasFile ? "has-file" : ""} ${node.indexed ? "indexed" : ""} ${node.isIndexingRule ? "indexing-rule" : ""}`}
        onClick={() => {
          if (hasChildren) onToggle(node.id);
          if (hasFile) onSelect(node.id);
        }}
      >
        {hasChildren && (
          <span className={`tree-toggle ${isExpanded ? "expanded" : ""}`}>
            ▶
          </span>
        )}
        <span className="tree-label">{node.label}</span>
        {node.indexed && <span className="tree-badge indexed">indexed</span>}
        {node.isIndexingRule && <span className="tree-badge indexing">CPI</span>}
        {node.isTest && <span className="tree-badge test">unit</span>}
        {node.isIntegrationTest && <span className="tree-badge integration">e2e</span>}
        {hasFile && !node.indexed && !node.isIndexingRule && !node.isTest && !node.isIntegrationTest && (
          <span className="tree-file">{node.file}</span>
        )}
      </div>
      {hasChildren && isExpanded && (
        <div className="tree-children">
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
