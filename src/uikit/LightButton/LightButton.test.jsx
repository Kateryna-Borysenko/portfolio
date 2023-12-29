import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LightButton from './LightButton';

describe('LightButton Component', () => {
  it('renders correctly with given name', () => {
    render(<LightButton name="Test Button" />);
    expect(screen.getByText('Test Button')).toBeInTheDocument();
  });

  it('calls onClick prop when clicked', () => {
    const handleClick = jest.fn();
    render(<LightButton name="Clickable" onClick={handleClick} />);
    fireEvent.click(screen.getByText('Clickable'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<LightButton name="Snapshot Test" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
