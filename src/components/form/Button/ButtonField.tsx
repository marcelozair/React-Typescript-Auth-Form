import React from 'react';
import { Spin } from '../../Spin/Spin';
import './ButtonField.css'

interface IButtonFieldProps {
  type?: 'button' | 'submit';
  children: React.ReactNode;
  className?: string;
  loading: boolean;
}

export const ButtonField: React.FC<IButtonFieldProps> = (props) => {
  const { type = 'button', children, loading } = props;

  return (
    <button
      type={type}
      disabled={loading}
      className="h-[40px] text-site-white px-3 rounded-md bg-site-primary-400 font-semibold flex items-center gap-2 justify-center"
    >
      { children }
      { loading && <Spin />}
    </button>
  )
};