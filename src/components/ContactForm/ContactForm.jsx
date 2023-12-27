import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import s from './ContactForm.module.css';
import Paper from '../common/Paper/Paper';
import Button from '../../uikit/Button/Button';
import {
  UserIcon,
  EmailIcon,
  PhoneIcon,
  ClockIcon,
  MessageIcon,
} from '../icons';

const schema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(15, 'Name must be at most 15 characters')
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
  message: yup
    .string()
    .max(600, 'Message must be at most 600 characters')
    .required('Message is required'),
});

const ContactForm = () => {
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(schema),
  });
  const { errors } = formState;

  const onSubmit = data => {
    console.log(data);
    reset();
  };

  return (
    <Paper>
      <div className={s.container}>
        <h1 className={s.title}>Let's have a chat</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={s.form}>
            <label className={s.label}>
              YOUR NAME
              <div className={s.input_container}>
                <span className={s.icon}>
                  {<UserIcon width="24px" fill="#b2492cff" />}
                </span>
                <input
                  className={s.input}
                  name="name"
                  type="text"
                  {...register('name')}
                />
                {errors.name && (
                  <p className={s.error}>{errors.name?.message}</p>
                )}
              </div>
            </label>

            <label className={s.label}>
              E-MAIL
              <div className={s.input_container}>
                <span className={s.icon}>
                  {<EmailIcon width="24px" fill="#b2492cff" />}
                </span>
                <input
                  className={s.input}
                  name="email"
                  type="text"
                  {...register('email')}
                />
                {errors.email && (
                  <p className={s.error}>{errors.email?.message}</p>
                )}
              </div>
            </label>
            <label className={s.label}>
              PHONE
              <div className={s.input_container}>
                <span className={s.icon}>
                  {<PhoneIcon width="24px" stroke="#b2492cff" />}
                </span>
                <input
                  className={s.input}
                  name="phone"
                  type="text"
                  {...register('phone')}
                />
                {errors.phone && (
                  <p className={s.error}>{errors.phone?.message}</p>
                )}
              </div>
            </label>
            <label className={s.label}>
              PREFERRED TIME OF CALL BACK
              <div className={s.input_container}>
                <span className={s.icon}>
                  {<ClockIcon width="24px" fill="#b2492cff" />}
                </span>
                <input
                  className={s.input}
                  name="time"
                  type="text"
                  {...register('time')}
                />
                {errors.time && (
                  <p className={s.error}>{errors.time?.message}</p>
                )}
              </div>
            </label>
            <label className={s.label}>
              MESSAGE
              <div className={s.input_container}>
                <span className={s.icon}>
                  {<MessageIcon width="24px" fill="#b2492cff" />}
                </span>
                <textarea
                  className={s.textarea}
                  name="message"
                  rows={5}
                  {...register('message')}
                />
                {errors.message && (
                  <p className={s.error}>{errors.message?.message}</p>
                )}
              </div>
            </label>
          </div>
          <Button name="Send Form" type="submit" />
        </form>
      </div>
    </Paper>
  );
};

export default ContactForm;
