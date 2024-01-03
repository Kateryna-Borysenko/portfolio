import React, { useState, useEffect } from 'react';
import Paper from '../common/Paper/Paper';
import { skills } from '../../data/skills';
import s from './Skills.module.css';

const Skills = () => {
  const [filteredSkills, setFilteredSkills] = useState(skills);
  const [activeButton, setActiveButton] = useState('all');

  useEffect(() => {
    if (activeButton === 'all') {
      setFilteredSkills(
        [...skills].sort((a, b) => a.name.localeCompare(b.name)),
      );
    } else {
      setFilteredSkills(skills.filter(skill => skill.type === activeButton));
    }
  }, [activeButton]);

  const skillTypes = skills.reduce((unique, skill) => {
    if (!unique.includes(skill.type)) {
      unique.push(skill.type);
    }
    return unique;
  }, []);

  return (
    <Paper>
      <div className={s.container}>
        <div className={s.btn_container}>
          <button
            className={activeButton === 'all' ? s.activeButton : ''}
            onClick={() => setActiveButton('all')}
          >
            All
          </button>

          {skillTypes.map(type => (
            <button
              key={type}
              className={activeButton === type ? s.activeButton : ''}
              onClick={() => setActiveButton(type)}
            >
              {type}
            </button>
          ))}
        </div>
        <div className={s.list}>
          {filteredSkills.map(({ id, name, path, type, alt }) => (
            <div key={id} className={s.item}>
              <div className={s.img_container}>
                <img src={path} alt={alt} />
              </div>
              <div className={s.title}>{name}</div>
            </div>
          ))}
        </div>
      </div>
    </Paper>
  );
};

export default Skills;
