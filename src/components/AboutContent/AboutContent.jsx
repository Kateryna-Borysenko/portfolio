import { toast } from 'react-toastify';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Paper from '../common/Paper/Paper';
import { ArrowIcon } from '../icons';
import img from '../../images/about.png';
import s from './AboutContent.module.css';
import LightButton from '../../uikit/LightButton/LightButton';

const AboutContent = () => {
  const navigate = useNavigate();

  const handleDownloadBtnClick = useCallback(() => {
    fetch('/cv_frontend_react_borysenko.pdf')
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
        toast.success('CV was downloaded successfully');
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
    <Paper>
      <div className={s.container}>
        <div className={s.top_container}>
          <div className={s.btn_container}>
            <div className={s.position}>Fullstack Developer</div>
            <LightButton name="Download CV" onClick={handleDownloadBtnClick} />
            <LightButton
              name="Certificates"
              onClick={handleCertificateBtnClick}
            />
          </div>
          <ArrowIcon className={s.arrow_icon} />

          <h1 className={s.title}>Kateryna Borysenko</h1>
        </div>
        <div className={s.bottom_container}>
          <section className={s.description_section}>
            <p className={s.paragraph}>
              <span className={s.accent}>Hey, that's my name up there. </span>I
              am a Fullstack Developer with a rich two-year experience in
              creating dynamic web applications. Originally from the picturesque
              regions of Eastern Ukraine, I have recently found a new home in
              sunny Florida – a change brought about by turbulent times in my
              homeland.
            </p>
            <p className={s.paragraph}>
              My professional story is a path of relentless discoveries and bold
              technological solutions. I have mastered a multitude of tools from
              HTML5 to Node.js and take pride in transforming code into art that
              enhances people's lives.
            </p>
            <p className={s.paragraph}>
              I believe that every project is not just a task, but a story that
              requires a personalized approach and creativity. My attention to
              detail, ability to see the bigger picture, and passion for
              innovation allow me to create products that are not only
              functional but also inspiring.
            </p>
            <p className={s.paragraph}>
              <span className={s.accent}>
                Today, actively seeking new opportunities, I am ready to apply
                my skills to ambitious projects.
              </span>
            </p>
          </section>
          <section className={s.quote_section}>
            <img className={s.image} src={img} alt="Developer" />
          </section>
          <section className={s.experience_section}>
            <p className={s.paragraph}>
              <span className={s.accent}>Proficient in </span>
              React, Redux, Redux thunk, React testing library, HTML5, CSS3,
              SASS, JavaScript, TypeScript.
            </p>
            <p className={s.paragraph}>
              <span className={s.accent}>Familiar with </span>
              NodeJS, Express, Mongo DB, React Native, Next JS.
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
  );
};

export default AboutContent;
