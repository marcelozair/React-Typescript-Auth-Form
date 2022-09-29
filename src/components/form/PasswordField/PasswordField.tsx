import './PasswordField.css'
import React, { useEffect, useState } from 'react';
import EyeClose from './../../../assets/images/icons/eye-slash-solid.svg'
import EyeOpen from './../../../assets/images/icons/eye-solid.svg'

import { FieldError } from 'react-hook-form';

interface IPasswordFieldProps extends React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> {
  label: string;
  error: FieldError | undefined;
}

export const PasswordField = React.forwardRef<HTMLInputElement, IPasswordFieldProps>(
  ({ label, error, ...rest }, ref) => {
    const [show, setShow] = useState(false);

    const changeShow = () => setShow(!show);

    useEffect(() => {
      console.log(error);
    }, [error])

    return (
      <div className="text-field">
        <label className="text-field__label">{label}</label>
        <div className="relative">
          <input
            className={!!error ? "text-field__input-error w-full" : "text-field__input w-full"}
            type={show ? "text" : "password"}
            ref={ref}
            {...rest}
          />
          {
            !show ? (
              <button type="button" onClick={changeShow} className="text-field__icon-eye-button">
                <img className="text-field__icon-eye" src={EyeClose} alt="Eye icon" />
              </button>
            ) : (
              <button type="button" onClick={changeShow} className="text-field__icon-eye-button">
                <img className="text-field__icon-eye" src={EyeOpen} alt="Eye icon" />
              </button>
            )
          }

        </div>
        {!!error && <p className="text-field__message-error">{error.message || 'Field invalid'}</p>}
      </div>
    )
  }
)