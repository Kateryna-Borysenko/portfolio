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
      <h1 className={s.title}>
        <span className={s.span}>You can explore additional</span>Projects
        <span className={s.span}>
          on my{' '}
          <a
            className={s.github_link}
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </span>
      </h1>

      <ul className={s.card_list}>
        {projects.map(item => (
          <li className={s.card_item} key={item.id}>
            <div className={s.img_container}>
              <img className={s.img} src={item.path} alt={item.title} />
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
        <Modal
          onClose={() => setSelectedProject(null)}
          data-testid="mock-modal"
        >
          <Project item={selectedProject} />
        </Modal>
      )}
    </div>
  );
};

export default Projects;
