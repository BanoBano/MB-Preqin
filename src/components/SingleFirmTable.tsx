import React from 'react';
import Link from 'next/link'
import { Firm } from '../models/Firm';

interface SingleFirmTableProps {
  firm: Firm;
}

// This really belonds in a utils.ts
const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(value);
  };

const SingleFirmTable: React.FC<SingleFirmTableProps> = ({ firm }) => {
    if (!firm) return <p>No data available</p>;
    const rowLabels = ['Firm ID', 'Type', 'AUM', 'Date Added', 'Address'];

    return (
        
        <div className="table-responsive">
        <Link href="/">Home</Link>
        <h1>Details and commitments for {firm.firm_name}</h1>
        <table className="table table-striped table-hover">
        <tbody>
            <tr><td className="thead-dark">Firm ID</td><td>{firm.firm_id}</td></tr>
            <tr><td className="thead-dark">Type</td><td>{firm.firm_type}</td></tr>
            <tr><td className="thead-dark">AUM</td><td>{formatCurrency(firm.AUM)}</td></tr>
            <tr><td className="thead-dark">Date Added</td><td>{new Date(firm.date_added).toLocaleDateString()}</td></tr>
            <tr><td className="thead-dark">Address</td><td>{firm.address}</td></tr>
        </tbody>

        </table>
        </div>
    )
}
  
export default SingleFirmTable;