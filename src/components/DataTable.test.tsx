import React from 'react';
import { render, screen } from '@testing-library/react';
import DataTable from './DataTable';
import { Firm } from '../models/Firm';


// This is just an example unit test - the pother components should have similar tests, but I wanted to 
// give a demonstration of more that could be done.
const mockData: Firm[] = [
  {
    firm_id: 1,
    firm_name: 'Alpha Capital',
    AUM: 1000000,
    date_added: new Date('2021-01-01'),
    last_updated: new Date('2021-06-01'),
    established_at: new Date('2000-01-01'),
    firm_type: 'PE',
    city: 'New York',
    country: 'USA',
    address: '123 Wall Street',
    postal_code: '10005',
  },
  {
    firm_id: 2,
    firm_name: 'Beta Investments',
    AUM: 2000000,
    date_added: new Date('2022-01-01'),
    last_updated: new Date('2022-06-01'),
    established_at: new Date('2010-01-01'),
    firm_type: 'HF',
    city: 'San Francisco',
    country: 'USA',
    address: '456 Market Street',
    postal_code: '94111',
  },
];

describe('DataTable', () => {
  test('renders table headers correctly', () => {
    render(<DataTable data={mockData} />);
    const headers = ['Firm ID', 'Firm Name', 'Type', 'Date Added', 'Address'];
    headers.forEach((header) => {
      expect(screen.getByText(header)).toBeInTheDocument();
    });
  });

  test('renders table rows correctly', () => {
    render(<DataTable data={mockData} />);
    mockData.forEach((firm) => {
      expect(screen.getByText(String(firm.firm_id))).toBeInTheDocument();
      expect(screen.getByText(firm.firm_name)).toBeInTheDocument();
      expect(screen.getByText(firm.firm_type)).toBeInTheDocument();
      expect(screen.getByText(new Date(firm.date_added).toLocaleDateString())).toBeInTheDocument();
      expect(screen.getByText(firm.address)).toBeInTheDocument();
    });
  });

  test('displays no data message when data is empty', () => {
    render(<DataTable data={[]} />);
    expect(screen.getByText('No data available')).toBeInTheDocument();
  });
});
