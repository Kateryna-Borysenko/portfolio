import { useState } from 'react';
import Project from './Project/Project';
import Modal from '../common/Modal/Modal';
import { projects } from '../../data/projects';
import { GITHUB_URL } from '../../utils/urls';
import s from './Projects.module.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleClick = project => {
    setSelectedProject(project);
  };

  return (
    <div className={s.container}>
      <h2 className={s.title}>
        You can explore additional projects on my
        <a
          className={s.github_link}
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </h2>

      <ul className={s.card_list}>
        {projects.map(item => (
          <li className={s.card_item} key={item.id}>
            <div className={s.img_container}>
              <img className={s.img} src={item.path} alt={item.title} />
              <p className={s.description}>{item.desc}</p>
            </div>
            <div className={s.card_caption} onClick={() => handleClick(item)}>
              <h3 className={s.card_title}>{item.title}</h3>
              <span className={s.more}>... See More</span>
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
