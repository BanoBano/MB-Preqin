'use client';

import React, { useEffect, useState } from 'react';
import SingleFirmTable from '../../../components/SingleFirmTable'
import DropDown from '../../../components/DropDown'

import { useParams } from 'next/navigation';
import { Firm } from '../../../models/Firm';
import CommitmentTable from '@/components/CommitmentTable';
import { Commitment } from '@/models/Commitment';

const findFirmById = (firms: Firm[], id: number): Firm | undefined => {
  return firms.find(firm => firm.firm_id === id);
};

const FirmDetails: React.FC = () => {
 
  const params  = useParams<{id: string}>();
  const id = Number(params.id);
  const [commitments, setCommitments] = useState<Commitment[] | undefined>([]);
  const [firm, setFirm] = useState<Firm | undefined>(undefined);
  
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedInvestmentType, setSelectedInvestmentType] = useState<string>('');

  const handleDropdownChange = (value: string) => {
    setSelectedInvestmentType(value);
  };

  useEffect(() => {
    if (id) {
      fetch(`http://127.0.0.1:8000/api/investors`)
        .then((response) => response.json())
        .then((data: Firm[]) => {
          setFirm(findFirmById(data, id));
          setLoading(false);
        });
    }
    if (id && selectedInvestmentType !== '')
    {
      fetch(`http://127.0.0.1:8000/api/investor/commitment/${selectedInvestmentType.toLowerCase()}/${id}`)
        .then((response) => response.json())
        .then((dataC: Commitment[]) => {
          setCommitments(dataC);
        });
    }
    if (selectedInvestmentType === '')
    {
      setCommitments(undefined);
    }
  }, [id, selectedInvestmentType]);



  if (loading) return <p>Loading...</p>;
  if (!firm) return <p>No data available</p>;

  return (
    <div>
      <SingleFirmTable firm={firm} />
      <DropDown selectedValue={selectedInvestmentType} onChange={handleDropdownChange} />
      <CommitmentTable data={commitments} />
    </div>
  );
};

export default FirmDetails;