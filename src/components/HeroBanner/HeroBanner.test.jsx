import { BrowserRouter } from 'react-router-dom';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HeroBanner from './HeroBanner';

describe('HeroBanner Component', () => {
  test('navigates to /contacts when the button is clicked', async () => {
    render(
      <BrowserRouter>
        <HeroBanner />
      </BrowserRouter>,
    );

    const button = screen.getByRole('button', { name: 'Contact Me' });

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      userEvent.click(button);
    });
  });
});
