import React from 'react';
import { renderWithProviders } from '../utils/test-utils';
import App from '../../App';

describe('App', () => {
  test('Is component renders correctly', async () => {
    const rootComponentSnapshot = renderWithProviders(<App />).toJSON();

    expect(rootComponentSnapshot).toMatchSnapshot();
  });
});
