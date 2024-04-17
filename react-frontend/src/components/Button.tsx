import React, { FC, MouseEventHandler } from 'react';

interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="custom-blue hover:bg-gray-300 big-text-color my-5 text-2xl py-3 px-4 rounded-[18px] focus:outline-none focus:shadow-outline"
    >
      {children}
    </button>
  );
};

export default Button;
