import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from './Footer';
import {
  EMAIL,
  LOCATION,
  GITHUB_URL,
  MIAMI_MAP_URL,
} from '../../../utils/constants';

describe('Footer Component', () => {
  it('contains the correct email link', () => {
    render(<Footer />);
    const emailLink = screen.getByRole('link', { name: EMAIL });
    expect(emailLink).toHaveAttribute('href', `mailto:${EMAIL}`);
  });

  it('contains the correct location link', () => {
    render(<Footer />);
    const locationLink = screen.getByRole('link', { name: LOCATION });
    expect(locationLink).toHaveAttribute('href', MIAMI_MAP_URL);
    expect(locationLink).toHaveAttribute('target', '_blank');
    expect(locationLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('contains the correct GitHub link', () => {
    render(<Footer />);
    const githubLink = screen.getByRole('link', { name: /ideas in code/i });
    expect(githubLink).toHaveAttribute('href', GITHUB_URL);
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
