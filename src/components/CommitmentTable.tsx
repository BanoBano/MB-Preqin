import React from 'react';
import { Commitment } from '../models/Commitment';

interface CommitmentTableProps {
  data: Commitment[] | undefined;
}

const CommitmentTable: React.FC<CommitmentTableProps> = ({ data }) => {
  if (!data) return <div/>
  if (data.length === 0) return <p>No comittments of this type</p>;

  const headers = ['ID', 'Currency', 'Amount'];

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
            <td>{row.currency}</td>
            <td>{row.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>  );
};

export default CommitmentTable;
