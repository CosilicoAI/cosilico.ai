import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

// Wrap App in MemoryRouter for testing since it uses BrowserRouter internally
const renderApp = () => {
  // App already includes BrowserRouter, so we test the HomePage directly
  return render(<App />);
};

test('renders site tagline', () => {
  renderApp();
  expect(screen.getByText(/Society, in silico/i)).toBeInTheDocument();
});

test('renders main heading', () => {
  renderApp();
  expect(screen.getByText(/We simulate/i)).toBeInTheDocument();
});
