import './SignIn.css'
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import schemaSignIn from '../../../validators/SchemaSignIn';
import SignInImage from './../../../assets/images/svg/signin-image.svg'
import { TextField } from '../../../components/form/TextField/TextField'
import { ButtonField } from '../../../components/form/Button/ButtonField'
import { generateRandomPassword } from '../../../utils/session';
import { PasswordField } from '../../../components/form/PasswordField/PasswordField';

export const SignIn = () => {
  const [loading, setLoading] = useState(false);

  const { register, reset, setValue, handleSubmit, trigger, formState: { errors } } = useForm({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schemaSignIn),
  })

  const generatePassword = () => {
    const password = generateRandomPassword()
    setValue('password', password);
  }

  const onSubmit = (values: any) => {
    console.log('values', );
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      reset();
    }, 1500)
  }

  return (
    <main className="signin">
      <form onSubmit={handleSubmit(onSubmit)} className="signin-box">
        <picture className="signin-box__picture">
          <img className="signin-box__image" src={SignInImage} alt="signin image" />
        </picture>
        <div className="signin-form">
          <h1 className="signin-form__title">LOG IN.</h1>
          <p className="signin-form__desc">Welcome dude! Are you ready to read more now?</p>
          <div className="signin-form__container">
            <TextField
              {...register('email')}
              error={errors.email}
              disabled={loading}
              label="Email"
              placeholder="example@example.com"
              id="email"
            />
            <PasswordField
              {...register('password')}
              error={errors.password}
              label="Password"
              disabled={loading}
              placeholder="Enter your password"
              id="password"
            />
            <button type="button" className="text-site-primary-400 text-left" onClick={generatePassword}>Generar contraseña</button>
            <ButtonField type="submit" loading={loading}>
              LOG IN.
            </ButtonField>
          </div>
          <p className="signin-form__message">You don't have an account? <Link className="link" to="/auth/sign-up">Create account</Link></p>
        </div>
      </form>
    </main>
  )
}