import React from 'react';
import { Commitment } from '../models/Commitment';

interface CommitmentTableProps {
  data: Commitment[];
}

const CommitmentTable: React.FC<CommitmentTableProps> = ({ data }) => {
  if (!data || data.length === 0) return <p>No data available</p>;

  const headers = ['ID', 'Asset Class', 'Currency', 'Firm ID', 'Amount'];

  return (
    <div className="table-responsive">
    <table className="table table-striped table-hover">
      <thead className="thead-dark">
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.asset_class}</td>
            <td>{row.currency}</td>
            <td>{row.firm_id}</td>
            <td>{row.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>  );
};

export default CommitmentTable;
