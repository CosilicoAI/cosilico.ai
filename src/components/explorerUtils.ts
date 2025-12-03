export type AdjList = Map<string, Set<string>>;

// Returns the set of node IDs to highlight given a selected node and hop limit.
export function computeHighlightIds(adjacency: AdjList, selected: string | null, hops: number = 1): Set<string> {
  const keep = new Set<string>();
  if (!selected) return keep;
  keep.add(selected);
  if (!adjacency.has(selected) || hops <= 0) return keep;
  const queue: Array<[string, number]> = [[selected, 0]];
  while (queue.length) {
    const [id, depth] = queue.shift()!;
    if (depth >= hops) continue;
    const nbrs = adjacency.get(id);
    if (!nbrs) continue;
    nbrs.forEach(n => {
      if (!keep.has(n)) {
        keep.add(n);
        queue.push([n, depth + 1]);
      }
    });
  }
  return keep;
}

