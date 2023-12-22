import Container from '../common/Container/Container';
import { Routes, Route } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import HomePage from '../../pages/HomePage/HomePage';
import AboutPage from '../../pages/AboutPage/AboutPage';
// import s from './App.module.css';

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
