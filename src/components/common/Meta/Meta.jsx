import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Kateryna Borysenko',
  description: 'View personal projects and website services.',
  keywords:
    'Kateryna Borysenko, Web Developer, React Developer, CSS3, JavaScript, Responsive Web Design, Web Accessibility, User Experience Design, Front-End Development, Portfolio,  Full-Stack Development',
};

export default Meta;
