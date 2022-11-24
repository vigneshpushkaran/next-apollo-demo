
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../pages/index';
import { UserProvider } from '@auth0/nextjs-auth0'


const user = {
  email: "vicky@hotmail.com",
  name: "Vignesh"
}
test('renders home page', async () => {
  const { findByText } = render(
    <UserProvider user={user}>
      <App user={user} />
    </UserProvider>);

  const buttonTag = await findByText(/Vignesh/i);
  expect(buttonTag).toBeInTheDocument();

  const linkElement = screen.getByText(/Demo is On !!!/i);
  expect(linkElement).toBeInTheDocument();

});

