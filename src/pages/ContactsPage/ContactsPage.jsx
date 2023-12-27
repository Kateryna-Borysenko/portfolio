import ContactForm from '../../components/ContactForm/ContactForm';
import s from './ContactsPage.module.css';

const ContactsPage = () => {
  return (
    <div className={s.container}>
      <ContactForm />
    </div>
  );
};

export default ContactsPage;
