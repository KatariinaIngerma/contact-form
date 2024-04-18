import React from 'react';

interface TextFieldProps {
  name: string;
  placeholder: string,
  className?: string; 
}

const TextField: React.FC<TextFieldProps> = ({ name, placeholder, className }) => {

  return (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      className={`bg-white border border-gray-300 rounded-lg py-2 px-2 focus:outline-none focus:border-blue-500  ${className}`}
    />
  );
};

export default TextField;
