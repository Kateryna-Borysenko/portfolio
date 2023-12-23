import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavItem from './NavItem/NavItem';
import { navConfig } from '../../data/navigation';

describe('Navigation Component', () => {
  it('renders all navigation items', () => {
    render(
      <Router>
        <ul>
          {navConfig.map(({ id, name, path }) => (
            <NavItem key={id} name={name} to={path} id={id} />
          ))}
        </ul>
      </Router>,
    );

    navConfig.forEach(item => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
    });
  });
});
