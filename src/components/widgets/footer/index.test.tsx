import { render, screen } from '@testing-library/react';
import Component from './index';

test('renders learn react link', () => {
  render(<Component />);
  const linkElement = screen.getByText(/Footer!/i);
  expect(linkElement).toBeInTheDocument();
});
