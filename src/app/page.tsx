'use client';

import React, { useEffect, useState } from 'react';
import DataTable from '../components/DataTable';
import { Firm } from '../models/Firm';

const Home: React.FC = () => {
  const [firms, setFirms] = useState<Firm[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/investors')
      .then((response) => response.json())
      .then((data: Firm[]) => {
        setFirms(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Firms</h1>
      <DataTable data={firms} />
    </div>
  );
};

export default Home;
