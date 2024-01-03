import React, { Suspense, lazy } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import Container from '../common/Container/Container';
import Layout from '../../components/Layout/Layout';
import Spinner from '../../components/common/Spinner/Spinner';

const HomePage = lazy(() =>
  import(
    '../../pages/HomePage/HomePage' /* webpackChunkName: "home-page-chunk" */
  ),
);
const AboutPage = lazy(() =>
  import(
    '../../pages/AboutPage/AboutPage' /* webpackChunkName: "about-page-chunk" */
  ),
);
const SkillsPage = lazy(() =>
  import(
    '../../pages/SkillsPage/SkillsPage' /* webpackChunkName: "skills-page-chunk" */
  ),
);
const ProjectsPage = lazy(() =>
  import(
    '../../pages/ProjectsPage/ProjectsPage' /* webpackChunkName: "projects-page-chunk" */
  ),
);
const CertificatesPage = lazy(() =>
  import(
    '../../pages/CertificatesPage/CertificatesPage' /* webpackChunkName: "certificates-page-chunk" */
  ),
);
const ContactsPage = lazy(() =>
  import(
    '../../pages/ContactsPage/ContactsPage' /* webpackChunkName: "contacts-page-chunk" */
  ),
);
const NotFoundPage = lazy(() =>
  import(
    '../../pages/NotFoundPage/NotFoundPage' /* webpackChunkName: "not-found-page-chunk" */
  ),
);

function App() {
  return (
    <Container>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        closeOnClick
        pauseOnHover
        theme="dark"
      />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/certificates" element={<CertificatesPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </Container>
  );
}

export default App;
