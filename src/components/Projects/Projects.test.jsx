import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Projects from './Projects';
import { projects } from '../../data/projects';

jest.mock('react-dom', () => ({
  ...jest.requireActual('react-dom'),
  createPortal: (element, target) => element,
}));

describe('Projects Component', () => {
  test('button click opens modal', () => {
    render(<Projects />);
    const buttons = screen.getAllByText('... see more');
    fireEvent.click(buttons[0]);
  });

  test('renders the title correctly', () => {
    render(<Projects />);
    expect(screen.getByText('Projects')).toBeInTheDocument();
  });

  test('renders the list of projects correctly', () => {
    render(<Projects />);
    projects.forEach(project => {
      expect(screen.getByText(project.title)).toBeInTheDocument();
      const images = screen.getAllByAltText(project.alt);
      expect(images.length).toBeGreaterThan(0);
    });
  });

  test('button click closes modal', () => {
    render(<Projects />);
    const buttons = screen.getAllByText('... see more');
    fireEvent.click(buttons[0]);

    const closeButton = screen.getByLabelText('Close');
    fireEvent.click(closeButton);

    expect(screen.queryByTestId('mock-modal')).not.toBeInTheDocument();
  });
});
