import { render, screen } from '@testing-library/react';
import Component from './index';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

test('renders learn react link', () => {
  let initialState = {};
  const mockStore = configureStore();
  let store = mockStore(initialState);

  render(<Provider store={store}><Component /></Provider>);
  const linkElement = screen.getByText(/live/i);
  expect(linkElement).toBeInTheDocument();
});
