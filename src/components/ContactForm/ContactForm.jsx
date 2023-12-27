import Input from '../common/Input/Input';
import Paper from '../common/Paper/Paper';
import { inputConfig } from '../../data/contact-form';
import s from './ContactForm.module.css';

const ContactForm = () => {
  const handleSubmit = () => {};
  return (
    <Paper>
      <form onSubmit={handleSubmit}>
        {inputConfig.map(({ id, name, type, label, icon }) => (
          <Input key={id} name={name} type={type} label={label} icon={icon} />
        ))}
      </form>
    </Paper>
  );
};

export default ContactForm;
