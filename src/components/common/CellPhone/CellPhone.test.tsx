import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CellPhone from './CellPhone';
import { PHONE_NUMBER } from '../../../utils/constants';

describe('CellPhone Component', () => {
  it('renders the phone number link correctly', () => {
    render(<CellPhone />);

    const phoneNumberLink = screen.getByText(PHONE_NUMBER);
    expect(phoneNumberLink).toBeInTheDocument();
    expect(phoneNumberLink).toHaveAttribute(
      'href',
      `tel:${PHONE_NUMBER.replace(/\D/g, '')}`,
    );
  });
});
