import { object, string } from 'yup';

const schemaSignIn = object({
  email: string().email('Format is invalid').required('Email is a required field'),
  password: string().min(8, 'Password must have minimum 8 characters').required('Password is a required field'),
});

export default schemaSignIn;