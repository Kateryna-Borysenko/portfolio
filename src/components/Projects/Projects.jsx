import { useState } from 'react';
import Project from './Project/Project';
import Modal from '../common/Modal/Modal';
import { projects } from '../../data/projects';
import s from './Projects.module.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleClick = project => {
    setSelectedProject(project);
  };

  return (
    <div className={s.container}>
      <h1 className={s.title}>Projects</h1>
      <ul className={s.card_list}>
        {projects.map(item => (
          <li className={s.card_item} key={item.id}>
            <div className={s.img_container}>
              <img className={s.img} src={item.path} alt={item.alt} />
              <p className={s.description}>{item.desc}</p>
            </div>
            <div className={s.card_caption}>
              <h3 className={s.card_title}>{item.title}</h3>
              <button
                className={s.card_button}
                onClick={() => handleClick(item)}
                aria-label="See More"
              >
                ... see more
              </button>
            </div>
          </li>
        ))}
      </ul>
      {selectedProject && (
        <Modal onClose={() => setSelectedProject(null)}>
          <Project item={selectedProject} />
        </Modal>
      )}
    </div>
  );
};

export default Projects;
