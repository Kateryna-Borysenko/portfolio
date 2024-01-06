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

            <h3 className={s.tech_stack_title}>Main Stack :</h3>
            <ul className={s.tech_stack_list}>
              <li className={s.tech_stack_item}>React</li>
              <li className={s.tech_stack_item}>Redux</li>
              <li className={s.tech_stack_item}>Type Script</li>
              <li className={s.tech_stack_item}>Type Script</li>
              <li className={s.tech_stack_item}>Type Script</li>
              <li className={s.tech_stack_item}>Type Script</li>
              <li className={s.tech_stack_item}>Type Script</li>
            </ul>
            <div className={s.btn_container}>
              <a
                className={s.link}
                href="https://github.com/Kateryna-Borysenko"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LightButton name="Demo" />
              </a>
              <a
                className={s.link}
                href="https://github.com/Kateryna-Borysenko"
                target="_blank"
                rel="noopener noreferrer"
              >
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
