import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavItem from './NavItem';

describe('NavItem Component', () => {
  it('renders the nav item with the given name and link', () => {
    const name = 'Test Item';
    const to = '/test';

    render(
      <Router>
        <NavItem id="test-id" name={name} to={to} />
      </Router>,
    );

    const navLink = screen.getByText(name);
    expect(navLink).toBeInTheDocument();
    expect(navLink).toHaveAttribute('href', to);
  });
});
