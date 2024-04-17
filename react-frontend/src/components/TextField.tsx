import React from 'react';

interface TextFieldProps {
  name: string;
  value: string;
  placeholder: string,
  onChange: (value: string) => void;
}

const TextField: React.FC<TextFieldProps> = ({ name, value, onChange, placeholder }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <input
      type="text"
      name={name}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      className="bg-white border border-gray-300 rounded-lg py-4 px-4 text-xl focus:outline-none focus:border-blue-500"
    />
  );
};

export default TextField;
