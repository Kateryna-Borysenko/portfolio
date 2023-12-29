import s from './Socials.module.css';
import { socials } from '../../../data/socials';

const Socials = () => {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Follow Me</h2>
      <ul className={s.socials_list}>
        {socials.map(({ id, name, icon, url }) => (
          <a
            key={id}
            className={s.item}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {icon}
            <div className={s.name}>{name}</div>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
