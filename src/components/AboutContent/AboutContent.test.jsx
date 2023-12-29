import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import AboutContent from './AboutContent';
import { toast } from 'react-toastify';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn().mockImplementation(() => () => {}),
}));

jest.mock('react-toastify', () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

describe('AboutContent', () => {
  it('navigates to the certificates page on button click', () => {
    render(<AboutContent />, { wrapper: BrowserRouter });
    fireEvent.click(screen.getByText('Certificates'));
  });

  it('handles errors during CV download', async () => {
    global.fetch = jest.fn(() => Promise.reject(new Error('Fetch error')));
    render(<AboutContent />, { wrapper: BrowserRouter });
    fireEvent.click(screen.getByText('Download CV'));
    await waitFor(() =>
      expect(toast.error).toHaveBeenCalledWith(
        'There was an error downloading the file: Fetch error',
      ),
    );
  });

  it('displays the fullstack developer position', () => {
    render(<AboutContent />, { wrapper: BrowserRouter });
    expect(screen.getByText('Fullstack Developer')).toBeInTheDocument();
  });

  it('displays the about section with personal description', () => {
    render(<AboutContent />, { wrapper: BrowserRouter });
    expect(
      screen.getByText("Hey, that's my name up there."),
    ).toBeInTheDocument();
  });

  it('displays the professional skills section', () => {
    render(<AboutContent />, { wrapper: BrowserRouter });
    expect(screen.getByText('Proficient in')).toBeInTheDocument();
    expect(screen.getByText('Familiar with')).toBeInTheDocument();
    expect(screen.getByText('Other Tools:')).toBeInTheDocument();
    expect(screen.getByText('Methodologies:')).toBeInTheDocument();
  });

  it('displays the download CV and certificates buttons', () => {
    render(<AboutContent />, { wrapper: BrowserRouter });
    expect(screen.getByText('Download CV')).toBeInTheDocument();
    expect(screen.getByText('Certificates')).toBeInTheDocument();
  });

  it('displays the image in the quote section', () => {
    render(<AboutContent />, { wrapper: BrowserRouter });
    expect(screen.getByAltText('Developer')).toBeInTheDocument();
  });

  it('renders correctly and matches snapshot', () => {
    const { asFragment } = render(<AboutContent />, { wrapper: BrowserRouter });
    expect(asFragment()).toMatchSnapshot();
  });
});
