import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be at most 15 characters')
    .required('Name is required'),
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required')
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Invalid email format',
    ),
  phone: yup
    .string()
    .optional()
    .matches(/^\d{10}$/, 'Invalid phone number format (10 digits)'),
  time: yup.string().optional().max(8, 'Time must be at most 8 characters'),
  message: yup.string().required('Message is required'),
});