import React from 'react';
import { Firm } from '../models/Firm';

interface DataTableProps {
  data: Firm[];
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  if (!data || data.length === 0) return <p>No data available</p>;

  const headers = ['FirmId', 'FirmName', 'Type', 'DateAdded', 'Address'];

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
          <tr key={row.firm_id}>
            <td>{row.firm_id}</td>
            <td>{row.firm_name}</td>
            <td>{row.firm_type}</td>
            <td>{new Date(row.date_added).toLocaleDateString()}</td>
            <td>{row.address}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>  );
};

export default DataTable;
