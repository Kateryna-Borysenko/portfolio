import { motion } from 'framer-motion';
import { useState, useMemo } from 'react';
import Paper from '../common/Paper/Paper';
import { skills } from '../../data/skills';
import s from './Skills.module.css';

const variants = {
  visible: i => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
  hidden: { opacity: 0, x: -100 },
};

const Skills = () => {
  const [activeButton, setActiveButton] = useState('all');

  const skillTypes = useMemo(() => {
    return skills.reduce((unique, skill) => {
      if (!unique.includes(skill.type)) {
        unique.push(skill.type);
      }
      return unique;
    }, []);
  }, []);

  const filteredSkills = useMemo(() => {
    return activeButton === 'all'
      ? [...skills].sort((a, b) => a.name.localeCompare(b.name))
      : skills.filter(skill => skill.type === activeButton);
  }, [activeButton]);

  return (
    <div className={s.wrapper}>
      <Paper>
        <div className={s.container}>
          <div className={s.btn_container}>
            <button
              className={activeButton === 'all' ? s.active_button : s.button}
              aria-label="all"
              onClick={() => setActiveButton('all')}
            >
              All Tech Skills
            </button>
            {skillTypes.map(type => (
              <button
                key={type}
                className={activeButton === type ? s.active_button : s.button}
                aria-label={type}
                onClick={() => setActiveButton(type)}
              >
                {type}
              </button>
            ))}
          </div>
          <motion.div
            key={activeButton}
            className={s.list}
            initial="hidden"
            animate="visible"
            variants={variants}
          >
            {filteredSkills.map(({ id, name, path, alt }, i) => (
              <motion.div
                key={id}
                className={s.item}
                variants={variants}
                custom={i}
              >
                <div className={s.img_container}>
                  <img src={path} alt={alt} loading="lazy" />
                </div>
                <div className={s.title}>{name}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Paper>
    </div>
  );
};

export default Skills;
