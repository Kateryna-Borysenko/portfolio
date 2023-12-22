import NavItem from './NavItem/NavItem';
import { navConfig } from '../../data/navigation';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <ul className={s.container}>
        {navConfig.map(({ id, name, path }) => (
          <NavItem key={id} name={name} to={path} />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
