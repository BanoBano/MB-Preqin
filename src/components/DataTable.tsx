import React from 'react';
import Link from 'next/link'
import { Firm } from '../models/Firm';

interface DataTableProps {
  data: Firm[];
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  if (!data || data.length === 0) return <p>No data available</p>;

  const headers = ['Firm ID', 'Firm Name', 'Type', 'Date Added', 'Address'];

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
            <td>
              <Link href={`/investors/${row.firm_id}`}>
                  {row.firm_name}
              </Link>
            </td>
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
