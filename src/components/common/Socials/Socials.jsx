import { socials } from '../../../data/socials';
import s from './Socials.module.css';

const Socials = () => {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Get Social</h2>
      <ul className={s.socials_list}>
        {socials.map(({ id, name, icon, url }) => (
          <a
            key={id}
            className={s.item}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={s.icon} src={icon} alt={name} />
            <div className={s.name}>{name}</div>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
