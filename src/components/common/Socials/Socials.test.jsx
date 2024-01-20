import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Socials from './Socials';
import { socials } from '../../../data/socials';

describe('Socials Component', () => {
  it('renders without crashing', () => {
    render(<Socials />);
    expect(screen.getByText('Follow Me')).toBeInTheDocument();
  });

  it('displays a list of social media links', () => {
    render(<Socials />);
    socials.forEach(social => {
      expect(screen.getByText(social.name)).toBeInTheDocument();
    });
  });

  it('has correct href for each social media link', () => {
    render(<Socials />);
    const links = screen.getAllByRole('link');

    links.forEach((link, index) => {
      expect(link).toHaveAttribute('href', socials[index].url);
    });
  });

  it('has target="_blank" and rel="noopener noreferrer" for each link', () => {
    render(<Socials />);
    socials.forEach(() => {
      const links = screen.getAllByRole('link');
      links.forEach(link => {
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('rel', 'noopener noreferrer');
      });
    });
  });
});
