import s from './CellPhone.module.css';
import { PHONE_NUMBER } from '../../../utils/constants';

const CellPhone = () => {
  return (
    <a href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`} className={s.cell_phone}>
      {PHONE_NUMBER}
    </a>
  );
};

export default CellPhone;
