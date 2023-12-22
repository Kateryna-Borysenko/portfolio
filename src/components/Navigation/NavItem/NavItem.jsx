import { Link, useMatch } from 'react-router-dom';
import s from './NavItem.module.css';

const NavItem = ({ id, to, name }) => {
  const match = useMatch({
    path: to,
    end: to?.length === 1,
  });

  return (
    <Link
      className={s.link}
      key={id}
      to={to}
      style={{
        color: match ? 'var(--ui-active)' : 'var(--ui-primary)',
      }}
    >
      {name}
    </Link>
  );
};

export default NavItem;
