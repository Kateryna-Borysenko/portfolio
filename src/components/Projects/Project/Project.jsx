import LightButton from '../../../uikit/LightButton/LightButton';
import Paper from '../../../components/common/Paper/Paper';
import s from './Project.module.css';

const Project = ({ item }) => {
  const { path, title, desc, alt } = item;
  return (
    <section className={s.section}>
      <Paper>
        <div className={s.container}>
          <div className={s.img_container}>
            <img className={s.img} src={path} alt={alt} />
          </div>

          <div className={s.text_container}>
            <h2 className={s.title}>{title}</h2>
            <p className={s.description}>{desc}</p>
            <div className={s.btn_container}>
              <a href="https://github.com/Kateryna-Borysenko">
                <LightButton name="Demo" />
              </a>
              <a href="https://github.com/Kateryna-Borysenko">
                <LightButton name="Code" />
              </a>
            </div>
          </div>
        </div>
      </Paper>
    </section>
  );
};

export default Project;
