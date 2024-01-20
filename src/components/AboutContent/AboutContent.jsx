import { toast } from 'react-toastify';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Paper from '../common/Paper/Paper';
import LightButton from '../../uikit/LightButton/LightButton';
import { ArrowIcon } from '../icons';
import image from '../../images/about.png';
import 'react-toastify/dist/ReactToastify.css';
import s from './AboutContent.module.css';

const AboutContent = () => {
  const navigate = useNavigate();

  const handleDownloadBtnClick = useCallback(() => {
    fetch(process.env.REACT_APP_CV_URL)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'cv_frontend_react_borysenko.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
        toast.success('CV was downloaded successfully', {
          position: toast.POSITION.TOP_LEFT,
        });
      })
      .catch(error => {
        toast.error(
          `There was an error downloading the file: ${error.message}`,
        );
      });
  }, []);

  const handleCertificateBtnClick = () => {
    navigate('/certificates');
  };

  return (
    <div className={s.wrapper}>
      <Paper>
        <div className={s.container}>
          <div className={s.top_container}>
            <div className={s.title_container}>
              <div className={s.position}>Front End Developer</div>
              <h2 className={s.title}>Kateryna Borysenko</h2>
            </div>
            <div className={s.btn_container}>
              <LightButton
                name="Download CV"
                ariaLabel="Download CV"
                onClick={handleDownloadBtnClick}
              />
              <LightButton
                name="Certificates"
                ariaLabel="Certificates"
                onClick={handleCertificateBtnClick}
              />
            </div>
          </div>
          <div className={s.bottom_container}>
            <section className={s.description_section}>
              <p className={s.paragraph}>
                <span className={s.accent}>
                  Hey, that's my name up there.
                  <ArrowIcon className={s.arrow_icon} />
                  <br />
                </span>
                I'm a Fullstack Developer with a rich two-year experience in
                creating dynamic web applications. Originally from the
                picturesque regions of Eastern Ukraine, I have recently found a
                new home in sunny Florida – a change brought about by turbulent
                times in my homeland.
              </p>
              <p className={s.paragraph}>
                My professional story is a path of relentless discoveries and
                bold technological solutions. I have mastered a multitude of
                tools from HTML5 to Node.js and take pride in transforming code
                into art that enhances people's lives.
              </p>
              <p className={s.paragraph}>
                I believe that every project is not just a task, but a story
                that requires a personalized approach and creativity. My
                attention to detail, ability to see the bigger picture, and
                passion for innovation allow me to create products that are not
                only functional but also inspiring.
              </p>
              <p className={s.paragraph}>
                <span className={s.accent}>
                  Today, actively seeking new opportunities, I am ready to apply
                  my skills to ambitious projects.
                </span>
              </p>
            </section>
            <section className={s.image_section}>
              <img
                className={s.image}
                src={image}
                alt="Developer"
                loading="lazy"
              />
            </section>
            <section className={s.experience_section}>
              <p className={s.paragraph}>
                <span className={s.accent}>Proficient in </span>
                React, Redux, Redux thunk, React testing library, HTML5, CSS3,
                SASS, JavaScript, TypeScript, REST API.
              </p>
              <p className={s.paragraph}>
                <span className={s.accent}>Familiar with </span>
                NodeJS, Express, Mongo DB, React Native, Next JS, GraphQL,
                Apollo.
              </p>
              <p className={s.paragraph}>
                <span className={s.accent}>Other Tools: </span>
                Figma, Git, GitHub, GitLab, Jira, Trello.
              </p>
              <p className={s.paragraph}>
                <span className={s.accent}>Methodologies: </span>
                Agile, Scrum, Responsive and Adaptive Design, BEM.
              </p>
            </section>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default AboutContent;
