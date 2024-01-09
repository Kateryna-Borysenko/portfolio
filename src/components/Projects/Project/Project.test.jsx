import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Project from '../../../components/Projects/Project/Project';
import portfolio from '../../../images/projects/portfolio.png';

describe('Testing Project Component', () => {
  const mockItem = {
    id: 2,
    title: 'Portfolio React App',
    path: portfolio,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
    techStack: ['React', 'Redux', 'Type Script', 'React Testing Library'],
    codeLink: '',
    demoLink: '',
  };

  test('renders the component without crashing', () => {
    render(<Project item={mockItem} />);
  });

  test('displays the correct content from props', () => {
    render(<Project item={mockItem} />);

    expect(screen.getByText(mockItem.title)).toBeInTheDocument();
    expect(screen.getByText(mockItem.desc)).toBeInTheDocument();
  });

  test('links open correctly', () => {
    render(<Project item={mockItem} />);

    const codeLink = screen.getByRole('link', { name: 'Code' });
    expect(codeLink).toHaveAttribute('href', mockItem.codeLink);

    const demoLink = screen.getByRole('link', { name: 'Demo' });
    expect(demoLink).toHaveAttribute('href', mockItem.demoLink);
  });

  test('renders tech stack list correctly', () => {
    render(<Project item={mockItem} />);

    mockItem.techStack.forEach(stackItem => {
      expect(screen.getByText(stackItem)).toBeInTheDocument();
    });
  });
});
