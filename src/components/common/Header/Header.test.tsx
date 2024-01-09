import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';

describe('Header Component', () => {
  it('renders the header with all navigation items', () => {
    render(
      <Router>
        <Header />
      </Router>,
    );

    expect(screen.getByRole('img')).toBeInTheDocument();
    const navItems = [
      'Home',
      'About Me',
      'Skills',
      'Projects',
      'Certificates',
      'Contacts',
    ];
    navItems.forEach(item => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
    expect(screen.getByText('+1 (888) 888-8888')).toBeInTheDocument();
  });
});
