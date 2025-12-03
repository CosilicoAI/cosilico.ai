import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders site tagline', () => {
  render(<App />);
  expect(screen.getByText(/Society, in silico/i)).toBeInTheDocument();
});

test('renders main heading', () => {
  render(<App />);
  expect(screen.getByText(/We simulate/i)).toBeInTheDocument();
});
