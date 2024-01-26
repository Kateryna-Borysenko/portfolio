import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Paper from '../common/Paper/Paper';
import Button from '../../uikit/Button/Button';
import Socials from '../../components/common/Socials/Socials';
import {
  UserIcon,
  EmailIcon,
  PhoneIcon,
  ClockIcon,
  MessageIcon,
} from '../icons';
import { schema } from './schema';
import s from './ContactForm.module.css';

const ContactForm = () => {
  const formRef = useRef();
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(schema),
  });
  const { errors } = formState;

  const [messageLength, setMessageLength] = useState(0);

  const handleMessageChange = event => {
    const length = event.target.value.length;
    setMessageLength(length);
  };

  const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;

  const onSubmit = async (data, e) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY,
      );

      toast.success('Message sent successfully!');
      setMessageLength(0);
      reset();
    } catch (error) {
      toast.error('Failed to send message!', error);
    }
  };

  return (
    <div className={s.container}>
      <Paper>
        <div>
          <h1 className={s.title}>Let's have a chat</h1>
          <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
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
                    maxLength={600}
                    {...register('message')}
                    onChange={handleMessageChange}
                  />
                  {errors.message && (
                    <p className={s.error}>{errors.message?.message}</p>
                  )}
                  <div className={s.counter}>{messageLength}/600</div>
                </div>
              </label>
            </div>
            <div className={s.button_container}>
              <Button name="Send Message" type="submit" ariaLabel="Send Form" />
            </div>
          </form>
        </div>
      </Paper>
      <Socials />
    </div>
  );
};

export default ContactForm;
