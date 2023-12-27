import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

describe('Button Component', () => {
  test('renders button correctly with children', () => {
    render(<Button>Test Button</Button>);
    expect(screen.getByText('Test Button')).toBeInTheDocument();
  });

  test('calls onClick prop when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);

    fireEvent.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('renders correctly with a name', () => {
    render(<Button name="Button Name">Button</Button>);
    expect(screen.getByText('Button Name')).toBeInTheDocument();
  });

  test('renders correctly with an icon', () => {
    const Icon = () => <span>Icon</span>;
    render(<Button icon={<Icon />}>Button with Icon</Button>);

    expect(screen.getByText('Button with Icon')).toBeInTheDocument();
    expect(screen.getByText('Icon')).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { asFragment } = render(
      <Button name="Snapshot Test">Click Me</Button>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
