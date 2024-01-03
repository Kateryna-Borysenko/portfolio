import Paper from '../common/Paper/Paper';
import { skills } from '../../data/skills';
import s from './Skills.module.css';

const Skills = () => {
  return (
    <Paper>
      <div className={s.list}>
        {skills.map(({ id, name, path, type, alt }) => (
          <div key={id} className={s.item}>
            <div className={s.img_container}>
              <img src={path} alt={alt} />
            </div>
            <div className={s.title}>{name}</div>
          </div>
        ))}
      </div>
    </Paper>
  );
};

export default Skills;
