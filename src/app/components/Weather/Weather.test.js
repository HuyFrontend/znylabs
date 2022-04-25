import React from 'react';
import { render } from '@testing-library/react';
import Weather from './Weather';

test('renders learn react link', () => {
  const { getByText } = render(
    <Weather />
  );
  // expect(getByText(/learn/i)).toBeInTheDocument();
});
