import Carousel from '../common/Carousel/Carousel';
import { certificates } from '../../data/certificates';
import s from './Certificates.module.css';

const Certificates = () => {
  return (
    <div className={s.container}>
      <Carousel items={certificates} />
    </div>
  );
};

export default Certificates;
