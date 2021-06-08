
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../pages/index';

test('renders home page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Demo is On !!!/i);
  expect(linkElement).toBeInTheDocument();

  const buttonElement = screen.getByText(/Search/i);
  expect(buttonElement).toBeInTheDocument();
});

