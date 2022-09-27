import React from 'react';
import './ButtonField.css'

interface ITextFieldProps {
  type?: 'button' | 'submit';
  children: React.ReactNode;
  className?: string;
}

export const ButtonField: React.FC<ITextFieldProps> = (props) => {
  const { type = 'button', children, className } = props;

  return (
    <button
      type={type}
      className="h-[40px] text-site-white px-3 rounded-md bg-site-primary-400 font-semibold"
    >
      { children }
    </button>
  )
};