import { Outlet } from 'react-router-dom';
import Header from '../../components/common/Header/Header';
import Footer from '../../components/common/Footer/Footer';
import ScrollToTopButton from '../common/ScrollToTopButton/ScrollToTopButton';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
        <ScrollToTopButton />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
