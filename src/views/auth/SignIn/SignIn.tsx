import './SignIn.css'
import { Link } from "react-router-dom";
import SignInImage from './../../../assets/images/svg/signin-image.svg'
import { TextField } from '../../../components/form/TextField/TextField'
import { ButtonField } from '../../../components/form/Button/ButtonField'

export const SignIn = () => {
  return (
    <main className="signin">
      <form className="signin-box">
        <picture className="signin-box__picture">
          <img className="signin-box__image" src={SignInImage} alt="signin image" />
        </picture>
        <div className="signin-form">
          <h1 className="signin-form__title">LOG IN.</h1>
          <p className="signin-form__desc">Welcome dude! Are you ready to read more now?</p>
          <div className="signin-form__container">
            <TextField 
              label="Email"
              placeholder="example@example.com"
              id="email"
              name="email"
            />
            <TextField
              label="Password"
              type="password"
              placeholder="Enter your password"
              id="password"
              name="password"
            />
            <ButtonField>
              LOG IN.
            </ButtonField>
          </div>
          <p className="signin-form__message">You don't have an account? <Link className="link" to="/auth/sign-up">Create account</Link></p>
        </div>
      </form>
    </main>
  )
}