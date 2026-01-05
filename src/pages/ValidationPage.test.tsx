import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import ValidationPage from './ValidationPage';

// Mock sample data
const mockData = {
  isSampleData: true,
  timestamp: "2025-12-23T00:00:00Z",
  commit: "abc123",
  dataSource: "Test CPS",
  householdsTotal: 100000,
  sections: [
    {
      section: "26/32",
      title: "Earned Income Tax Credit",
      variable: "eitc",
      households: 28450,
      testCases: [],
      summary: {
        total: 28450,
        matches: 27890,
        matchRate: 0.980,
        meanAbsoluteError: 45.20,
      },
      validatorBreakdown: {
        policyengine: { matches: 28100, total: 28450, rate: 0.988 },
      },
      speed: {
        cosilicoTimeMs: 100,
        peTimeMs: 500,
        nCases: 28450,
        cosilicoPerCaseUs: 3.5,
        pePerCaseUs: 17.6,
        speedup: 5.0,
        cosilicoThroughput: 284500,
        peThroughput: 56900,
      },
    },
  ],
  overall: {
    totalHouseholds: 100000,
    totalTests: 28450,
    totalMatches: 27890,
    matchRate: 0.980,
    meanAbsoluteError: 45.20,
    speed: {
      cosilicoTotalMs: 100,
      peTotalMs: 500,
      totalCases: 28450,
      speedup: 5.0,
      cosilicoThroughput: 284500,
      peThroughput: 56900,
    },
  },
  validators: [
    {
      name: "cosilico",
      available: true,
      version: "dev",
      householdsCovered: 100000,
    },
    {
      name: "policyengine",
      available: true,
      version: "1.0.0",
      householdsCovered: 100000,
    },
  ],
};

// Mock fetch and import
beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockData),
    })
  ) as jest.Mock;
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe('ValidationPage', () => {
  it('renders loading state initially', () => {
    render(<ValidationPage />);
    expect(screen.getByText(/Loading validation results/i)).toBeInTheDocument();
  });

  it('renders validation dashboard with data', async () => {
    render(<ValidationPage />);

    await waitFor(() => {
      expect(screen.getByText('Validation dashboard')).toBeInTheDocument();
    });

    expect(screen.getByText('Test CPS')).toBeInTheDocument();
    expect(screen.getByText('100,000')).toBeInTheDocument(); // Total households
    expect(screen.getByText('Earned Income Tax Credit')).toBeInTheDocument();
  });

  it('displays overall stats correctly', async () => {
    render(<ValidationPage />);

    await waitFor(() => {
      expect(screen.getByText('Validation dashboard')).toBeInTheDocument();
    });

    expect(screen.getAllByText('98.00%').length).toBeGreaterThan(0); // Match rate appears multiple times
    expect(screen.getAllByText('$45.20').length).toBeGreaterThan(0); // MAE appears multiple times
  });

  it('displays speed metrics', async () => {
    render(<ValidationPage />);

    await waitFor(() => {
      expect(screen.getByText('Performance')).toBeInTheDocument();
    });

    expect(screen.getAllByText('5.0x').length).toBeGreaterThan(0); // Speedup appears in multiple places
  });

  it('displays validator status', async () => {
    render(<ValidationPage />);

    await waitFor(() => {
      expect(screen.getByText('Validators')).toBeInTheDocument();
    });

    expect(screen.getByText('cosilico')).toBeInTheDocument();
    expect(screen.getByText('policyengine')).toBeInTheDocument();
  });

  it('handles error state when data fails to load', async () => {
    global.fetch = jest.fn(() => Promise.reject(new Error('Failed'))) as jest.Mock;

    // Mock dynamic import to also fail
    jest.mock('../data/sample-validation.json', () => {
      throw new Error('No sample data');
    });

    render(<ValidationPage />);

    await waitFor(() => {
      expect(screen.queryByText(/Loading/i)).not.toBeInTheDocument();
    });
  });
});
