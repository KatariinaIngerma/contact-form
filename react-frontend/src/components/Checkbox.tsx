import React from 'react';

interface CheckboxProps {
  id: string;
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ id, label }) => {
  return (
    <div className="mt-2 flex items-center">
      <input type="checkbox" id={id} className="mr-2" />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Checkbox;