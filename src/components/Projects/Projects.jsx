import Project from './Project/Project';
import { projects } from '../../data/projects';
import s from './Projects.module.css';

const Projects = () => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Projects</h1>

      <div className={s.list}>
        {projects.map(item => (
          <Project item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
