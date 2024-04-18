import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  name: string;
  type: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({ onClick, name, type }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className="font-denim custom-blue hover:bg-gray-300 big-text-color my-5 py-2.5 px-[18px] rounded-[12px] focus:outline-none focus:shadow-outline"
    >
      {name}
    </button>
  );
};

export default Button;
