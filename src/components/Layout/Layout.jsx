import { Outlet } from 'react-router-dom';
import Header from '../../components/common/Header/Header';
import Footer from '../../components/common/Footer/Footer';
import s from './Layout.module.css';

const Layout = () => {
  return (
    <>
      <Header />
      <main className={s.main_container}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
