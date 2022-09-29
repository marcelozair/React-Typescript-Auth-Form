import './TextField.css'
import React, { useEffect } from 'react';
import { FieldError } from 'react-hook-form';

interface ITextFieldProps extends React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> {
  label: string;
  error: FieldError | undefined;
  type?: 'text' | 'password';
}

export const TextField = React.forwardRef<HTMLInputElement, ITextFieldProps>(
  ({ label, type = 'text', error, ...rest }, ref) => {

    useEffect(() => {
      console.log(error);
    }, [error])

    return (
      <div className="text-field">
        <label className="text-field__label">{label}</label>
        <input
          className={!!error ? "text-field__input-error" : "text-field__input"}
          type={type}
          ref={ref}
          {...rest}
        />
        {!!error && <p className="text-field__message-error">{error.message || 'Field invalid'}</p>}
      </div>
    )
  }
)