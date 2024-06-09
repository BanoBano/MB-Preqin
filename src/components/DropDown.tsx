import React from 'react';

interface Option {
  value: string;
  label: string;
}

const options: Option[] = [
  { value: 'PE', label: 'PE - Private Equity' },
  { value: 'PD', label: 'PD - Private Debt' },
  { value: 'RE', label: 'RE - Real Estate' },
  { value: 'INF', label: 'INF - Infrastructure' },
  { value: 'NR', label: 'NR - Natural Resources' },
  { value: 'HF', label: 'HF - Hedge Funds' },
];

interface DropDownProps {
  selectedValue: string;
  onChange: (value: string) => void;
}

const DropDown: React.FC<DropDownProps> = ({ selectedValue, onChange }) => {
  return (
    <div className="dropdown">
      <select
        id="investmentType"
        className="btn btn-secondary dropdown-toggle"
        value={selectedValue || ''}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="" disabled>
          Select an asset class
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
