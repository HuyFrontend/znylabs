import React from 'react';
import { render } from '@testing-library/react';
import Loading from './Loading';

test('renders learn react link', () => {
  const { getByText } = render(
    <Loading/>
  );
  // expect(getByText(/learn/i)).toBeInTheDocument();
});
