import s from './HomePage.module.css';
import HeroBanner from '../../components/HeroBanner/HeroBanner';

const HomePage = () => {
  return (
    <div className={s.container}>
      <HeroBanner />
    </div>
  );
};

export default HomePage;
