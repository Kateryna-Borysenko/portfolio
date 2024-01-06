import Project from './Project/Project';
import { projects } from '../../data/projects';
import s from './Projects.module.css';

const Projects = () => {
  return (
    <div className={s.container}>
      <div className={s.list}>
        {projects.map(item => (
          <Project item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
