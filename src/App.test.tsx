import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders site headline', () => {
  render(<App />);
  const matches = screen.getAllByText(/Simulating Society/i);
  expect(matches.length).toBeGreaterThan(0);
});
