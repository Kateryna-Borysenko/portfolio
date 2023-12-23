import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Paper from './Paper';

describe('Paper Component', () => {
  test('renders children correctly', () => {
    render(
      <Paper>
        <p>Test Content</p>
      </Paper>,
    );
    const contentElement = screen.getByText('Test Content');
    expect(contentElement).toBeInTheDocument();
  });
});
