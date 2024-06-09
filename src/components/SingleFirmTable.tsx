import React from 'react';
import Link from 'next/link'
import { Firm } from '../models/Firm';

interface SingleFirmTableProps {
  firm: Firm;
}

const SingleFirmTable: React.FC<SingleFirmTableProps> = ({ firm }) => {
    if (!firm) return <p>No data available</p>;
    const rowLabels = ['Firm ID', 'Firm Name', 'Type', 'AUM', 'Date Added', 'Address'];

    return (
        <div className="table-responsive">
        <table className="table table-striped table-hover">
        <tbody>
            <tr><td className="thead-dark">Firm ID</td><td>{firm.firm_id}</td></tr>
            <tr><td className="thead-dark">Firm Name</td><td>{firm.firm_name}</td></tr>
            <tr><td className="thead-dark">Type</td><td>{firm.firm_type}</td></tr>
            <tr><td className="thead-dark">AUM</td><td>{firm.AUM}</td></tr>
            <tr><td className="thead-dark">Date Added</td><td>{new Date(firm.date_added).toLocaleDateString()}</td></tr>
            <tr><td className="thead-dark">Address</td><td>{firm.address}</td></tr>
        </tbody>

        </table>
        </div>
    )
}
  
export default SingleFirmTable;