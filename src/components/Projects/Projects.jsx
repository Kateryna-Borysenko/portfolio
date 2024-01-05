import { motion } from 'framer-motion';
import univer from '../../images/projects/univer.png';
import portfolio from '../../images/projects/portfolio.png';
import todo from '../../images/projects/todo.png';
import filmoteka from '../../images/projects/univer.png';
import Paper from '../../components/common/Paper/Paper';
import s from './Projects.module.css';

const Projects = () => {
  const items = [
    {
      id: 1,
      title: 'Univer React App',
      img: univer,
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
    },
    {
      id: 2,
      title: 'Portfolio React App',
      img: portfolio,
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
    },
    {
      id: 3,
      title: 'Todo React App',
      img: todo,
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
    },
    {
      id: 4,
      title: 'Vanilla JS App',
      img: filmoteka,
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
    },
  ];
  // const sliderVariants = {
  //   initial: {
  //     x: 0,
  //   },
  //   animate: {
  //     x: '-165%',
  //     transition: {
  //       repeat: Infinity,
  //       repeatType: 'mirror',
  //       duration: 20,
  //     },
  //   },
  // };

  return (
    <div className={s.container}>
      <Paper>
        <div>Projects</div>
      </Paper>
      {/* <motion.div
        className={s.sliding_text_container}
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Fullstack Developer
      </motion.div> */}
    </div>
  );
};

export default Projects;
