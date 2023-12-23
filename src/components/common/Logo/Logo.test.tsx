import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Logo from './Logo';

describe('Logo Component', () => {
  it('renders the logo with provided src', () => {
    const testLogo = 'test-logo-url.jpg';
    render(<Logo logo={testLogo} />);

    const logoImg = screen.getByRole('img', { name: /img/i });

    expect(logoImg).toBeInTheDocument();
    expect(logoImg).toHaveAttribute('src', testLogo);
    expect(logoImg).toHaveAttribute('alt', 'img');
  });
});
