import React from 'react';
import { render, cleanup } from 'react-testing-library';
import App from './App';

afterEach(() => {
  cleanup();
});

describe('<App />', () => {
  test('should render title', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('page-title').textContent).toBe('MovieZone');
  });
});
