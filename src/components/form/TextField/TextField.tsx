import React from 'react';
import './TextField.css'

interface ITextFieldProps extends React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> {
  label: string;
  type?: 'text' | 'password';
}

export const TextField: React.FC<ITextFieldProps> = (props) => {
  const { label, type = 'text' } = props;

  return (
    <div className="text-field">
      <label className="text-field__label">{label}</label>
      <input
        className="text-field__input"
        type={type}
        {...props}
      />
    </div>
  )
};