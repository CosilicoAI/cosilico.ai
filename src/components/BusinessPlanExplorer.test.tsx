import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BusinessPlanExplorer from './BusinessPlanExplorer';

// Minimal YAML to drive the component
const nodesYAML = `
- id: a
  label: A Customer
  type: Customer
- id: b
  label: B UseCase
  type: UseCase
- id: c
  label: C Product
  type: Product
- id: d
  label: D Capability
  type: Capability
`;

const edgesYAML = `
- from: a
  to: b
- from: b
  to: c
`;

// jsdom polyfills for measurement code
beforeAll(() => {
  (global as any).requestAnimationFrame = (cb: any) => setTimeout(cb, 0);
  (global as any).cancelAnimationFrame = (id: number) => clearTimeout(id);
  if (!(global as any).DOMRect) {
    (global as any).DOMRect = class {
      left: number; top: number; width: number; height: number;
      constructor(left: number, top: number, width: number, height: number) {
        this.left = left; this.top = top; this.width = width; this.height = height;
      }
    } as any;
  }
});

beforeEach(() => {
  jest.spyOn(global, 'fetch').mockImplementation((url: any) => {
    if (String(url).includes('nodes.yaml')) {
      return Promise.resolve({ ok: true, text: () => Promise.resolve(nodesYAML) }) as any;
    }
    if (String(url).includes('edges.yaml')) {
      return Promise.resolve({ ok: true, text: () => Promise.resolve(edgesYAML) }) as any;
    }
    return Promise.resolve({ ok: false }) as any;
  });
});

afterEach(() => {
  (global.fetch as any).mockRestore?.();
});

function nodeDiv(text: string) {
  const els = screen.getAllByText(text);
  const el = els.find(e => e.closest('.explorer-node')) as HTMLElement | undefined;
  if (!el) throw new Error(`Node with label ${text} not found`);
  return el.closest('.explorer-node') as HTMLElement;
}

test('no selection: nothing is dimmed', async () => {
  render(<BusinessPlanExplorer />);
  await waitFor(() => screen.getByText('A Customer'));
  expect(nodeDiv('A Customer')).not.toHaveClass('dimmed');
  expect(nodeDiv('B UseCase')).not.toHaveClass('dimmed');
  expect(nodeDiv('C Product')).not.toHaveClass('dimmed');
  expect(nodeDiv('D Capability')).not.toHaveClass('dimmed');
});

test('selecting B keeps A and C bright but dims D', async () => {
  render(<BusinessPlanExplorer />);
  await waitFor(() => screen.getByText('B UseCase'));
  const [bNode] = screen.getAllByText('B UseCase');
  await userEvent.click(bNode);

  expect(nodeDiv('B UseCase')).not.toHaveClass('dimmed');
  expect(nodeDiv('A Customer')).not.toHaveClass('dimmed');
  expect(nodeDiv('C Product')).not.toHaveClass('dimmed');
  expect(nodeDiv('D Capability')).toHaveClass('dimmed');
});

test('selecting A dims C when using 1-hop highlight', async () => {
  render(<BusinessPlanExplorer />);
  await waitFor(() => screen.getByText('A Customer'));
  const [aNode] = screen.getAllByText('A Customer');
  await userEvent.click(aNode);

  expect(nodeDiv('A Customer')).not.toHaveClass('dimmed');
  expect(nodeDiv('B UseCase')).not.toHaveClass('dimmed');
  // Since highlight is 1-hop, C is not a direct neighbor of A and should dim
  expect(nodeDiv('C Product')).toHaveClass('dimmed');
});
