import { computeHighlightIds, AdjList } from './explorerUtils';

describe('computeHighlightIds', () => {
  test('returns empty set when nothing selected', () => {
    const adj: AdjList = new Map();
    expect(computeHighlightIds(adj, null)).toEqual(new Set());
  });

  test('selected plus direct neighbors when hops=1', () => {
    const adj: AdjList = new Map([
      ['A', new Set(['B'])],
      ['B', new Set(['A', 'C'])],
      ['C', new Set(['B'])],
      ['D', new Set(['E'])],
      ['E', new Set(['D'])],
    ]);
    const keep = computeHighlightIds(adj, 'A', 1);
    expect(keep).toEqual(new Set(['A', 'B']));
  });

  test('includes neighbors-of-neighbors when hops=2', () => {
    const adj: AdjList = new Map([
      ['A', new Set(['B'])],
      ['B', new Set(['A', 'C'])],
      ['C', new Set(['B'])],
    ]);
    const keep = computeHighlightIds(adj, 'A', 2);
    expect(keep).toEqual(new Set(['A', 'B', 'C']));
  });
});

