import { motion } from 'framer-motion';
import Paper from '../../components/common/Paper/Paper';
import s from './Projects.module.css';

const Projects = () => {
  const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: '-165%',
      transition: {
        repeat: Infinity,
        repeatType: 'mirror',
        duration: 20,
      },
    },
  };

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
