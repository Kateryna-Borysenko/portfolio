import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Logo from './Logo';

describe('Logo Component', () => {
  it('renders the logo with provided src and links to home page', () => {
    const testLogo = 'test-logo-url.jpg';
    render(
      <Router>
        <Logo logo={testLogo} />
      </Router>,
    );

    const logoImg = screen.getByRole('img', { name: 'Developer Logo' });
    expect(logoImg).toBeInTheDocument();
    expect(logoImg).toHaveAttribute('src', testLogo);
    expect(logoImg).toHaveAttribute('alt', 'Developer Logo');

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/');
  });
});
